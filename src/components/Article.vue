<template>
  <div id="article">
    <div id="article_content" v-html="compiledMarkdown"></div>
    <div id="article_list">
      <tree-list></tree-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import marked from 'marked'
import highlightjs from 'highlightjs'
import treeList from './treeList'
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
  props: {
    model: Object
  },
  data () {
    return {
      files: [{file: ''}]
    }
  },
  components: {
    treeList
  },
  methods: {
  },
  created () {
    this.$http.get('/api/articles/1').then(response => {
      console.log(response)
      // 拿到数据
      let mdData = response.body.data  // md格式数据
      //  mdData = mdData.replace(/#/g, '# ')  // 因为简书里的#后接文字是可以被识别的，但是marked必须# 后接文字才可以被识别
      let htmlData = marked(mdData, {sanitize: true})    // html格式数据
      this.$set(this.files, 0, {file: htmlData})
    }, response => {  // 请求失败
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

<style>
#article {
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

div {
  display: inline-block;
  vertical-align:top;
  box-sizing: border-box;
  padding: 0 20px;
}
#article_content {
  width: 80%;
  border-style: solid;
  display: inline-block;
}
#article_list {
  width: 18%;
  height: 100%;
  border-style: solid;
  display: inline-block;
}
code {
  color: #f66;
}
</style>
