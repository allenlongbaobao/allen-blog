<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu :router=true>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>列表</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/manage/articleManage">文章</el-menu-item>
              <el-menu-item index="1-2" route="/manage/articleListManage">文章集</el-menu-item>
              <el-menu-item index="1-3" route="/manage/draftManage">草稿箱</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import env from '../../config/dev.env.js'

let IP = env.SERVER_IP
export default {
  data () {
    return {
      signPageShow: false,
      artileList: []
    }
  },
  created () {
    console.log(this.$route.params.user)
    if (this.detectSignState()) {
      this.getArticleList()
    } else {
      this.signPageShow = true
    }
  },
  update () {
    console.log('update')
  },
  methods: {
    getArticleList: function () {
      this.$http.get(IP + '/api/getArticleList').then(response => {
        this.articleList = response.body.data
      })
    },
    detectSignState: function () {
      let cookieBlog = document.cookie.replace(/(?:(?:^|.*;\s*)blog\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (!cookieBlog) {
        console.log('cookie.blog不存在')
        return false
      } else {
        return true
      }
    },
    userLogged: function (data) {
      console.log(data)
    },
    update: function () {
      console.log('get it! i will update')
    }
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
