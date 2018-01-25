<template>
  <div id="artcicle">
    <!--
    <div id="article_content" v-html="compiledMarkdown"></div>
    -->
    <el-container>
      <el-main id="article_content">
        <ul v-for="item in articles">
          <article-item :articleInfo="item"></article-item>
        </ul>
      </el-main>

      <el-aside id="article_list">
        <ul class="itemName" v-for="item in menu">
          <tree-list :articles="item.articles" :name="item.name" @toggleArticle="toggleArticle"></tree-list>
        </ul>
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
import articleItem from './articleItem'
//  import _ from 'lodash'

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
      articles: []
    }
  },
  components: {
    treeList,
    articleItem
  },
  methods: {
    getAllArticle: function () {
      this.$http.get('/api/getAllArticle').then(response => {
        this.articles = response.data.data
        console.log(this.articles)
      }).catch(err => {
        console.log('getAllArticle err:', err)
      })
    },
    toggleArticle: function (link) {
      this.getArticleAndShow(link)
    },
    getArticleAndShow: function (link) {
      this.$http.get('/api/articles/' + link).then(response => {
        let mdData = response.body.data
        let htmlData = marked(mdData)
        this.files = htmlData
      }, response => {
        console.log(response)
      })
    }
  },
  created () {
    this.getAllArticle()
    this.$http.get('/api/getmenu').then(response => {
      this.$data.menu = response.body.data
      this.getArticleAndShow(this.$data.menu[0].articles[0].link)
    }, response => {
      console.log(response)
    })
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
code {
  color: #f66;
}
</style>
