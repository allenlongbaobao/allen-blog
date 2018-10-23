<template>
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
        <div class="beforeLoaded" v-show="!Loaded">
          <div class="ball-pulse-sync">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <ul>
          <li v-for="item in articles">
            <article-item :articleInfo="item"></article-item>
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
import marked from 'marked'
import {mapActions, mapGetters} from 'vuex'
import highlightjs from 'highlightjs'
import articleItem from '../pages/article/articleItem'
import articleSide from '../pages/article/articleSide'

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
      articles: []
    }
  },
  components: {
    articleItem,
    articleSide
  },
  methods: {
    ...mapActions({
      fetchBlogs: 'fetchBlogs',
      fetchArticleList: 'fetchArticleList',
      addVisitedNum: 'addVisitedNum'
    }),
    ...mapGetters({
      getArticleContent: 'getArticleContent'
    }),
    showArticleInList: function (id) {
      if (id === 'all') {
        this.articles = this.$store.state.articles
      } else {
        this.articles = this.$store.state.articles.filter(article => {
          return article.articleList.Lid === id
        })
      }
    }
  },
  mounted () {
    this.addVisitedNum()
    this.fetchArticleList()
    this.fetchBlogs()
    this.articles = this.$store.state.articles
  },
  computed: {
    compiledMarkdown: function () {
      return this.files
    },
    ...mapGetters({
      articleList: 'getArticleList',
      Loaded: 'getLoadedState'
    })
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
