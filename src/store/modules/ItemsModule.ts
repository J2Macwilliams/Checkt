import { API } from 'aws-amplify'
import { State, Item } from '../interfaces'
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

const state = {
  items: [],
  user: {
    attributes: {
      sub: ''
    }
  }
}

const getters = {
  getUser: (state: State) => state.user,
  allItems: (state: State) => state.items,

}

const actions = {
  async fetchUser({commit}: {commit: Function}) {
    onAuthUIStateChange((state, user) => {
      if (state === AuthState.SignedIn) {
        console.log(`user`, user)
        commit('setUser', user)
      }
    });
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
  setUser: (state: State, user: any) => (state.user = user),
  setItems: (state: State, items: Item[]) => (state.items = items),
  newItem: (state: State, item: Item) => (state.items.unshift(item))
}

export default { state, getters, actions, mutations }