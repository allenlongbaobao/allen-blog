<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu default-active="1-1" :router=true>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>列表</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/manage/articleManage">文章</el-menu-item>
              <el-menu-item index="1-2" route="/manage/articleListManage">文章集</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view ></router-view>
      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editorShow: false,
      tableData: null
    }
  },
  created () {
    this.$http.get('/api/getArticleList').then(response => {
      console.log('getarticlelist', response.body.data)
      window.localStorage.setItem('articleList', JSON.stringify(response.body.data))
    }, response => {
    })
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
.addNew {
  width: 100%;
}
</style>
