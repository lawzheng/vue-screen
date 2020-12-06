import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 1
  },
  mutations: {
    set_NUM (state) {
      state.num++
    }
  },
  actions: {
  },
  modules: {
  }
})
