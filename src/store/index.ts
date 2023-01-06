import { countMutationIncrement, countMutationDicrement } from './mutatuons/countMutation';
import { countState } from './state/countState';
import { createStore } from 'vuex'

export default createStore({
  state: {
    countState
  },
  getters: {
  },
  mutations: {
    countMutationIncrement,
    countMutationDicrement
  },
  actions: {
  },
  modules: {
  }
})
