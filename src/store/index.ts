import {createStore}  from 'vuex'

import ItemsModule from './modules/ItemsModule'


export const store = createStore({
 modules: {
   ItemsModule,
 }
})

