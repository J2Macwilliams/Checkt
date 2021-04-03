import { API } from 'aws-amplify'
import { State, Product, Store } from '../interfaces'
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

const state = {
  items: [],
  filteredItems: [],
  stores: [],
  user: undefined,
  authState: undefined,
  unsubscribeAuth: undefined,
  isNavOpen: false
}

const getters = {
  getUser: (state: State) => state.user,
  getNavStatus: (state: State) => state.isNavOpen,
  getAuthState: (state: State) => state.authState,
  allItems: (state: State) => state.items,
  filteredItems: (state: State) => state.filteredItems,
  allStores: (state: State) => state.stores
}

const actions = {
  async fetchItems({ commit }: { commit: Function }) {
    const response = await API.get('checktapi', '/items/userId', {})
    commit('setItems', response)
  },
  async addItem({ commit }: { commit: Function }, data: Product) {
    await API.post('checktapi', '/items', { body: { ...data, } })
    commit('newItem', data)
  },
  async fetchStores({ commit }: { commit: Function }) {
    const response = await API.get('checktapi', '/stores/userId', {})
    commit('setStores', response)
  },
  async addStore({ commit }: { commit: Function }, data: Store) {
    await API.post('checktapi', '/stores', { body: { ...data, } })
    commit('newStore', data)
  },
  async deleteItem({ commit }: { commit: Function }, id: string) {
    await API.del('checktapi', `/items/object/id/${id}`, {})
    commit('removeItem', id)
  },
  async deleteStore({ commit }: { commit: Function }, id: string) {
    await API.del('checktapi', `/stores/object/id/${id}`, {})
    commit('removeStore', id)
  },
  async searchItems({ commit }: { commit: Function }, name: string) {
    const response = await state.items.filter((item: Product) => item.store.name.match(name))
    commit('setFilteredItems', response)
  },

}

const mutations = {
  toggleNav: (state: State) => (state.isNavOpen = !state.isNavOpen),
  setAuth: (state: State) => (state.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
    state.authState = authState;
    state.user = authData;
  })),
  clearAuth: (state: State) => state.unsubscribeAuth(),
  // coming from actions
  setItems: (state: State, items: Product[]) => (state.items = items, state.filteredItems = items),
  newItem: (state: State, item: Product) => (state.filteredItems.unshift(item)),
  setStores: (state: State, stores: Store[]) => (state.stores = stores),
  newStore: (state: State, store: Store) => (state.stores.unshift(store)),
  removeItem: (state: State, id: string) => (state.filteredItems = state.filteredItems.filter(item => item.id !== id)),
  removeStore: (state: State, id: string) => (state.stores = state.stores.filter(store => store.id !== id)),
  setFilteredItems: (state: State, payload: Product[]) => (state.filteredItems = payload)
}

export default { state, getters, actions, mutations }