import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    menuInfo() {
      const rtnVal = {
        menus: [
          { link: '/hello', text: 'helloWorld' },
          { link: '/guide/index', text: 'index' },
          { link: '/guide/form', text: 'form' },
          { link: '/guide/list', text: 'list' },
        ],
      }
      return rtnVal
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
})
