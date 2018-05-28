<template v-if="$route.meta.keepAlive">
  <div id="artcicle">
    <!--
    <div id="article_content" v-html="compiledMarkdown"></div>
    -->

    <div class="list-container">
      <ul>
        <li class="article__articlelist" v-for="item in articleList">
          <el-button class="articlelist__button" @click="showArticleInList(item._id)">{{item.name}}</el-button>
        </li>
      </ul>
    </div>
    <el-container>
      <el-main id="article_content">
        <div class="beforeLoaded" v-show="notLoaded">
          <div class="ball-pulse-sync">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <ul>
          <li v-for="item in articles">
            <article-item :articleInfo="item" @openCompleteArticle="openCompleteArticle"></article-item>
          </li>
        </ul>
      </el-main>
      <el-aside>
        <article-side></article-side>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import marked from 'marked'
import highlightjs from 'highlightjs'
import treeList from './treeList'
import articleItem from '../pages/article/articleItem'
import articleSide from '../pages/article/articleSide'
import _ from 'lodash'
import env from '../../config/dev.env.js'
let IP = env.SERVER_IP

Vue.use(Resource)
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang, callback) {
    return highlightjs.highlightAuto(code).value   // 这里highlightjs会自动给代码增加类
  },
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  data () {
    return {
      files: '',
      menu: [],
      articles: [],
      articleList: [],
      notLoaded: true
    }
  },
  components: {
    treeList,
    articleItem,
    articleSide
  },
  methods: {
    getArticleList: function () {
      this.$http.get(IP + '/api/getArticleList').then(response => {
        this.articleList = response.data.data
        this.articleList.unshift({_id: 'all', name: 'All'})
        console.log(this.articleList)
      })
    },
    getAllArticle: function () {
      this.$http.get(IP + '/api/getAllArticle').then(response => {
        this.notLoaded = false
        this.articles = _.remove(response.data.data, n => {
          return n.publish === true
        })
      }).catch(err => {
        console.log('getAllArticle err:', err)
      })
    },
    showArticleInList: function (id) {
      if (id === 'all') {
        this.getAllArticle()
      } else {
        this.$http.post(IP + '/api/getPublishArticleInOneListById', {id: id}).then(response => {
          this.articles = response.data.data
        })
      }
    },
    toggleArticle: function (link) {
      this.getArticleAndShow(link)
    },
    getArticleAndShow: function (link) {
      this.$http.get(IP + '/api/articles/' + link).then(response => {
        let mdData = response.body.data
        let htmlData = marked(mdData)
        this.files = htmlData
      }, response => {
        console.log(response)
      })
    },
    openCompleteArticle: function (article) {
    },
    addVisitedNum: function () {
      this.$http.get(IP + '/api/addVisitedNum', {withCredentials: true}).then(response => {
      })
    }
  },
  created () {
    console.log(this.articles[0])
    console.log(this.articleList[0])
    if (this.articles[0] === undefined || this.articleList[0] === undefined) {
      console.log('页面未加载成功')
    } else {
      console.log('页面加载完毕')
    }
    this.addVisitedNum()
    this.getAllArticle()
    this.getArticleList()
  },
  computed: {
    compiledMarkdown: function () {
      return this.files
    }
  }
}
</script>

<style scoped>
#article {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

#article_list .itemName {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  position: relative;
}

.list-container {
  height: 55px;
  padding-left: 20px;
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
}

.list-container::-webkit-scrollbar {
  display:none;
}

.list-container ul {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0;
  list-style: none;
}
.article__articlelist {
  height: 0;
}

.articlelist__button{
  float: left;
  position: relative;
  border-radius: 30px;
  margin-left: 5px;
}

.articlelist__button:hover, .articlelist__button:focus {
  color: white;
  background-color: black;
}

code {
  color: #f66;
}

#article_content {
  padding: 10px 5px 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#article_content ul {
  list-style: none;
  padding: 0;
}
@media all and (max-width: 600px) {
  .el-aside {
    display: none;
  }
}

.beforeLoaded {
  display: flex;
  justify-content: center;
}

.ball-pulse-sync {
  transform: scale(1);
}

.ball-pulse-sync > div:nth-child(1) {
  -webkit-animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
  animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out;
}
.ball-pulse-sync > div:nth-child(2) {
  -webkit-animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
  animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out;
}
.ball-pulse-sync > div:nth-child(3) {
  -webkit-animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
  animation: ball-pulse-sync 0.6s 0s infinite ease-in-out;
}
.ball-pulse-sync > div {
  background-color: #B1AFAE;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;
}

@keyframes ball-pulse-sync {
  33% {
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  }
  66% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
