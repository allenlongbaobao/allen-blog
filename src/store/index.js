import Vue from 'vue'
import Vuex from 'vuex'

import getters from './blog/blogGetters'
import actions from './blog/blogActions'
import mutations from './blog/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [],
    articleList: [],
    loadedState: false
  },
  getters,
  actions,
  mutations
})
