<template>
  <div id="article">
    <div id="article_content" v-html="compiledMarkdown"></div>
    <div id="article_list">
      <ul class="itemName" v-for="item in menu">
        <tree-list :articles="item.articles" :name="item.name" @toggleArticle="toggleArticle"></tree-list>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import marked from 'marked'
import highlightjs from 'highlightjs'
import treeList from './treeList'
import editor from './editor'
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
      files: [{file: ''}],
      menu: []
    }
  },
  components: {
    treeList,
    editor
  },
  methods: {
    toggleArticle: function (link) {
      this.getArticleAndShow(link)
    },
    getArticleAndShow: function (link) {
      this.$http.get('/api/articles/' + link).then(response => {
        let mdData = response.body.data
        let htmlData = marked(mdData)
        this.$set(this.files, 0, {file: htmlData})
      }, response => {
        console.log(response)
      })
    }
  },
  created () {
    this.$http.get('/api/getmenu').then(response => {
      console.log(response)
      this.$data.menu = response.body.data
      this.getArticleAndShow(this.$data.menu[0].articles[0].link)
    }, response => {
      console.log(response)
    })
  },
  computed: {
    compiledMarkdown: function () {
      return this.files[0].file
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

div {
  display: inline-block;
  vertical-align:top;
  box-sizing: border-box;
}
#article_content {
  width: 80%;
  border-style: solid;
  display: inline-block;
}
#article_list {
  float: right;
  width: 19%;
  height: 100%;
  border-style: solid;
  display: inline-block;
  padding: 0px;
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
