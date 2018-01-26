<template>
  <div class="completeaArticle">
    <h1 class="articleName">{{articleName}}</h1>
    <markHtml :mhtml="compiledMarkdown"></markHtml>
  </div>
</template>

<script>
import Marked from 'marked'
import markHtml from './MarkHtml'
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
  components: {
    markHtml
  },
  created () {
    this.getArticleById(this.$route.params.id)
  },
  methods: {
    getArticleById: function (id) {
      this.$http.post('/api/getArticleById', {id: id}).then(response => {
        this.article = response.data.data.articleContent
        this.articleName = response.data.data.articleName
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
.completeaArticle {
  padding-left: 200px;
  padding-right: 200px;
}
.articleName{
  color: red;
}
</style>
