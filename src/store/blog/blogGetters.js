export default {
  getArticles: function (state, getter) {
    return state.articles
  },

  getArticleList: function (state, getter) {
    return state.articleList
  },

  getLoadedState: function (state, getter) {
    return state.loadedState
  },

  getArticleContent: (state) => (id) => {
    return state.articles.find(item => {
      return item._id === id
    })
  }
}
