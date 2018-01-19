<template>
  <div
    class="item">
    <p
      @click="toggle">
      {{name}}
      <span>[{{open ? '-' : '+'}}]</span>
    </p>
    <ul v-show="open" v-if="hisChildren">
      <li
        @click="toggleArticle"
        v-for="article in articles">
        {{article.name}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      open: false
    }
  },
  props: {
    articles: Array,
    name: String
  },
  methods: {
    toggle: function () {
      this.open = !this.open
      console.log('open:' + this.open)
    },
    toggleArticle: function () {
      console.log('openArticle:')
    },
    hisChildren: function () {
      return this.model.children && this.model.children.length > 0
    }
  }
}
</script>

<style>
.item {
  width: 100%;
  height: 100%;
}
</style>
