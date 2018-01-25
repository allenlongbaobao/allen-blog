<template>
  <div class="">
    <h1>{{articleName}}</h1>
    <div class="" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import Marked from 'marked'
export default {
  data () {
    return {
      article: '',
      articleName: ''
    }
  },
  computed: {
    compiledMarkdown: function () {
      return Marked(this.article)
    }
  },
  created () {
    this.getArticleById(this.$route.params.id)
  },
  methods: {
    getArticleById: function (id) {
      this.$http.post('/api/getArticleById', {id: id}).then(response => {
        this.article = response.data.data.articleContent
        this.articleName = response.data.data.articleName
        //  this.compiledMarkdown()
      }).catch(error => {
        console.log(error)
      })
    },
    compiledMarkdown: function () {
      return Marked(this.article)
    }
  }
}
</script>

<style scoped>

</style>
