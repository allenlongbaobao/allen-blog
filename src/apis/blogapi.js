import config from '../../config/dev.env.js'
import axios from 'axios'
const IP = config.SERVER_IP

export default {
  getAllArticle: function () {
    return axios.get(IP + '/api/getAllArticle').then(response => {
      return response.data.data
    }).catch(err => {
      console.log('getAllArticle err:', err)
      return 'err'
    })
  },

  getArticleList: function () {
    return axios.get(IP + '/api/getArticleList').then(response => {
      let articleList = response.data.data
      articleList.unshift({_id: 'all', name: 'All'})
      return articleList
    })
  },

  addVisitedNum: function () {
    axios.get(IP + '/api/addVisitedNum', {withCredentials: true}).then(response => {
    })
  }
}
