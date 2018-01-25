<template>
  <div class="item">
    <h1>{{info.articleName}}</h1>
    <h2>{{info.articleContent}}</h2>
    <el-button type="danger">查看原文</el-button>
    <hr style="border:1px dotted #036" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      info: this.articleInfo
    }
  },
  props: {
    articleInfo: Array
  },
  methods: {
  }
}
</script>

<style scoped>
.item {

}
hr {

}
.el-button {
}
</style>
