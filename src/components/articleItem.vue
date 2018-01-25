<template>
  <div class="item">
    <h1>{{info.articleName}}</h1>
    <div class="" v-html="compiledMarkdown"></div>
    <el-button type="danger">查看原文</el-button>
    <hr style="border:1px dotted #036" />
  </div>
</template>

<script>
import Marked from 'marked'

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
