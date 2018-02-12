<template>
  <div>
    <el-container>
      <el-header>
        <span>Welcome: {{user.username}}</span>
        <el-button type="primary" @click="goToMainPage">主页</el-button>
        <el-button type="danger" @click="signOut">注销</el-button>
      </el-header>
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
    </el-container>
  </div>
</template>

<script>
import env from '../../config/dev.env.js'
let IP = env.SERVER_IP

export default {
  data () {
    return {
      user: {},
      signPageShow: false,
      artileList: []
    }
  },
  created () {
    this.manage().then((user) => {
      this.user = user
      this.getArticleList()
    }).catch((code) => {
      this.$router.push({name: 'admin'})
    })
  },
  methods: {
    manage: function () {
      return this.$http.post(IP + '/api/signIn', {}, {withCredentials: true}).then(response => {
        return response.body.data
      }).catch(err => {
        throw new Error(err.body.data)
      })
    },
    getArticleList: function () {
      this.$http.get(IP + '/api/getArticleList').then(response => {
        this.articleList = response.body.data
      })
    },
    goToMainPage: function () {
      this.$destroy()
      this.$router.push({name: 'article'})
    },
    signOut: function () {
      this.$http.post(IP + '/api/signOut', {}, {withCredentials: true}).then(response => {
        this.$router.push({name: 'article'})
      })
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
