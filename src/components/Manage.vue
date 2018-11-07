<template>
  <div class="manage-container">
    <el-container v-show="bodyShow">
      <el-header>
        <div class="header-manage">
          <span @click="goToMainPage">Manage Center</span>
        </div>
        <div class="header-info">
          <span>Welcome: {{user.username}}</span>
          <el-button type="primary" @click="goToMainPage">主页</el-button>
          <el-button type="danger" @click="signOut">注销</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu :router=true>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/manage/articleManage">文章</el-menu-item>
              <el-menu-item index="1-2" route="/manage/articleListManage">文章集</el-menu-item>
              <el-menu-item index="1-3" route="/manage/draftManage">草稿箱</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <div class='master' v-show="masterShow">
      <p>加载中</p>
    </div>
  </div>
</template>

<script>
import env from '../../config/dev.env.js'
import axios from 'axios'
let IP = env.SERVER_IP

export default {
  data () {
    return {
      user: {},
      signPageShow: false,
      masterShow: true,
      bodyShow: false
    }
  },
  created () {
    this.manage().then((user) => {
      console.log('user', user)
      this.masterShow = false
      this.bodyShow = true
      this.user = user
    }).catch((code) => {
      this.masterShow = false
      this.$router.push({name: 'admin'})
    })
  },
  methods: {
    manage: function () {
      return axios.post(
        IP + '/api/signIn',
        {},
        {
          withCredentials: true,
          progress: event => {
            this.masterShow = true
          }
        }
      ).then(response => {
        console.log('response', response)
        return response.data.data
      }).catch(err => {
        console.log('err', err)
        throw new Error(err.body.data)
      })
    },
    goToMainPage: function () {
      this.$destroy()
      this.$router.push({name: 'article'})
    },
    signOut: function () {
      axios.post(IP + '/api/signOut', {}, {withCredentials: true}).then(response => {
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

.manage-container {
}

.master {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200,200,200, 0.5);
  z-index: 1000;
}

.master > p {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
}

.el-header {
  background-color: #000;
  position: relative;
}


.header-manage {
  margin-top: 13px;
  float: left;
  color: #FFF;
  font-size: 1.5em;
  cursor: pointer;
}

.header-manage:hover {
  font-style: italic;
}

.header-info {
  margin-top: 10px;
  float: right;
  color: #FFF;
}
</style>
