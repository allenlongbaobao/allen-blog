<template>
  <div
    class="item"
    @click="toggle">
    {{models.name}}
    <span>[{{openFile ? '-' : '+'}}]</span>
    <ul v-show="openFile" v-if="hisChildren">
      <li
        @click="toggleArticle"
        v-for="child in models.children">
        {{child.name}}
        <ul v-show="openArticle">
          <li v-for="article in child.articles">
            {{article.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
let menuList = {
  name: '目录',
  children: [
    {
      name: '数据结构',
      link: '#',
      articles: [
        {
          name: '数据结构第一篇文章',
          link: '#'
        },
        {
          name: '数据结构第二篇文章',
          link: '#'
        }
      ]
    },
    {
      name: '算法',
      link: '#',
      articles: [
        {
          name: '算法第一篇文章',
          link: '#'
        }
      ]
    }
  ]
}

export default {
  data () {
    return {
      models: menuList,
      openFile: false,
      openArticle: false
    }
  },
  methods: {
    toggle: function () {
      this.openFile = !this.openFile
      console.log('openFile:' + this.openFile)
    },
    toggleArticle: function () {
      this.openArticle = !this.openArticle
      this.openFile = !this.openFile
      console.log('openArticle:' + this.openArticle)
    },
    hisChildren: function () {
      this.open = false
      return this.model.children && this.model.children.length > 0
    }
  }
}
</script>

<style>
</style>
