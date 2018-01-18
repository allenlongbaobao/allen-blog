<template>
  <div>
    <div class="compiledHtml" v-html="compiledHtml">

    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import Resource from 'vue-resource'
import marked from 'marked'
import highlightjs from 'highlightjs'

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
  sanitize: true,
  smartLists: true,
  smartypants: false
})
export default {
  data () {
    return {
      files: [{file: ''}]
    }
  },
  components: {

  },
  methods: {
  },
  created () {
    this.$http.get('/api/articles/1').then(response => {
      console.log(response)
      // 拿到数据
      let mdData = response.body.data  // md格式数据
      //  mdData = mdData.replace(/#/g, '# ')  // 因为简书里的#后接文字是可以被识别的，但是marked必须# 后接文字才可以被识别
      let htmlData = marked(mdData)    // html格式数据
      this.$set(this.files, 0, {file: htmlData})

      //  this.$set('file', htmlData)
      //  this.$options.methods.test(htmlData)
    }, response => {  // 请求失败
      console.log(response)
    })
  },
  computed: {
    compiledHtml: function () {
      console.log(this.files[0].file)
      return this.files[0].file
    }
  }
}
</script>

<style>
</style>
