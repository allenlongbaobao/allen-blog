<template>
  <div class="item">
    <h1>{{articleInfo.articleName}}</h1>
    <mark-html class="partContent" :mhtml="compiledMarkdown"></mark-html>
    <router-link :to="{name: 'showCompleteArticle', params:{id: articleInfo._id}}"><el-button type="primary" @click="openCompleteArticle">查看原文</el-button></router-link>
    <hr style="border:1px dashed #036" />
  </div>
</template>

<script>
import Marked from 'marked'
import markHtml from '../common/MarkHtml'

export default {
  data () {
    return {
    }
  },
  props: {
    articleInfo: Object
  },
  components: {
    markHtml
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
  background-color: #E1E3E6;
  border-radius: 5px;
  padding: 3px 0 0 10px;
}

h1{
}

hr {
  clear: both;
}

.partContent {
  height: 200px;
  overflow: hidden;
}

.el-button {
  float: right;
}
</style>
