<template>
  <div class="item">
    <h1>{{articleInfo.articleName}}</h1>
    <span>{{publishAt}}</span>
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
      publishAt: null
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
  mounted () {
    this.publishAt = this.getPublishAt(this.articleInfo.publishAt)
  },
  methods: {
    openCompleteArticle: function () {
      this.$emit('openCompleteArticle', this.articleInfo)
    },
    getPublishAt: function (publishAt) {
      let date = new Date(publishAt)
      let year = date.getFullYear()
      let mon = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      return year + '-' + mon + '-' + day
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
  font-size: 1rem;
}

span {
  font-size: 0.8rem;
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
