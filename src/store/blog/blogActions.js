import api from '@/apis/blogapi'

export default {
  fetchBlogs (context) {
    if (window.localStorage.articles) {
      context.state.articles = JSON.parse(window.localStorage.articles)
      context.commit('changeLoadedState')
    } else {
      api.getAllArticle().then(articles => {
        context.state.articles = articles
        window.localStorage.articles = JSON.stringify(articles)
        context.commit('changeLoadedState')
      })
    }
  },

  fetchArticleList (context) {
    api.getArticleList().then(list => {
      console.log('list', list)
      context.state.articleList = list
    })
  },

  addVisitedNum (context) {
    api.addVisitedNum()
  }
}
