<template>
  <div class="item">
    <h1>{{info.articleName}}</h1>
    <div class="" v-html="compiledMarkdown"></div>
    <router-link :to="{name: 'showCompleteArticle', params:{id: info._id}}"><el-button type="danger" @click="openCompleteArticle">查看原文</el-button></router-link>
    <hr style="border:1px dashed #036" />
  </div>
</template>

<script>
import Marked from 'marked'
import Router from 'vue-router'

export default {
  data () {
    return {
      info: this.articleInfo
    }
  },
  props: {
    articleInfo: Array
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.info.articleContent)
    }

  },
  methods: {
    openCompleteArticle: function () {
      Router.go({name: 'showCompleteArticle', params: {id: this.articleInfo._id}})
      this.$emit('openCompleteArticle', this.articleInfo)
    }
  }
}
</script>

<style scoped>
.item {

}
h1, h2 {
}
hr {
  clear: both;

}
.el-button {
  float: right;
}
</style>
