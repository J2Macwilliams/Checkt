import { API } from 'aws-amplify'
import { State, Item } from '../interfaces'
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

const state = {
  items: [],
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

}

const actions = {
  
  triggerAuth({ commit }: { commit: Function }) {
    commit('setAuth')
  },
  clearAuth({commit}: {commit: Function}){
    commit('cleanSlate')
  },
  async fetchItems({ commit }: { commit: Function }) {
    const response = await API.get('checktapi', '/items/userId', {})
    console.log('fetchItems', response)
    commit('setItems', response)
  },
  async addItem({ commit }: { commit: Function }, data: Item) {

    await API.post('checktapi', '/items', {
      body: {
        ...data,

      }
    })

    commit('newItem', data)
  }
}

const mutations = {
  toggleNav: (state: State) => (state.isNavOpen = !state.isNavOpen),
  setAuth: (state: State) => (state.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
    state.authState = authState;
    state.user = authData;
  })),
  cleanSlate: (state: State) => state.unsubscribeAuth(),
  setItems: (state: State, items: Item[]) => (state.items = items),
  newItem: (state: State, item: Item) => (state.items.unshift(item))
}

export default { state, getters, actions, mutations }