<template>
  <div class="item">
    <h1>{{articleInfo.articleName}}</h1>
    <div class="" v-html="compiledMarkdown"></div>
    <router-link :to="{name: 'showCompleteArticle', params:{id: articleInfo._id}}"><el-button type="danger" @click="openCompleteArticle">查看原文</el-button></router-link>
    <hr style="border:1px dashed #036" />
  </div>
</template>

<script>
import Marked from 'marked'

export default {
  data () {
    return {
    }
  },
  props: {
    articleInfo: Object
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.articleInfo.articleContent)
    }

  },
  methods: {
    openCompleteArticle: function () {
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
