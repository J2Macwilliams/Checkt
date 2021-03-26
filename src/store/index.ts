import {createStore}  from 'vuex'
import items from './modules/items'

export const store = createStore({
 modules: {
   items,
 }
})

