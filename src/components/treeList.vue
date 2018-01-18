<template>
  <div class="">
    <ul v-for="item in data">
      <li>
        <a v-on:click="openChildren(item)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
let menuList = [
  {
    name: '数据结构',
    link: '#',
    children: [
      {
        name: '数据结构第一篇文章',
        link: '#'
      }
    ]
  },
  {
    name: '算法',
    link: '#',
    children: []
  }
]

export default {
  data () {
    return {
      data: menuList
    }
  },
  methods: {
    openChildren: function (data) {
      console.log(data)
      if (data.children && data.children.length > 0) {
        console.log('有子目录')
      } else {
        console.log('没有子目录')
      }
    }
  }
}
</script>

<style>
</style>
