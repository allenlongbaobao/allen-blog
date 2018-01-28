<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <el-button type="button" @click="toggleSignIn">登陆</el-button>
          <el-button type="button" @click="toggleSignUp">注册</el-button>
        </div>
        <div class="modal-body">
          <transition name="fade">
            <el-form class="signInForm" :model="signInForm" v-show="signInShow" status-icon label-width="100px" >
              <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="signInForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="signInForm.pass" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </transition>
          <transition name="fade">
            <el-form class="signUpForm" :model="signUpForm" v-show="signUpShow" label-width="100px">
              <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="signUpForm.username"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="signUpForm.email"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="signUpForm.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="signUpForm.checkPass"auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </transition>
        </div>
        <div class="modal-footer">
          <el-button id="signBtn" type="button" @click="sign">登陆</el-button>
          <el-button type="danger" @click="cancel">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import env from '../../config/dev.env.js'
let IP = env.SERVER_IP

export default {
  data () {
    return {
      signUpShow: false,
      signInShow: true,
      signInForm: {
        username: '',
        pass: ''
      },
      signUpForm: {
        username: '',
        email: '',
        pass: '',
        checkPass: ''
      },
      user: {}
    }
  },
  components: {
  },
  computed: {
  },
  created () {
  },
  methods: {
    toggleSignIn: function () {
      this.signUpShow = false
      this.signInShow = true
      let btn = document.getElementById('signBtn')
      btn.innerHTML = '登陆'
    },
    toggleSignUp: function () {
      this.signInShow = false
      this.signUpShow = true
      let btn = document.getElementById('signBtn')
      console.log(btn)
      btn.innerHTML = '注册'
    },
    cancel: function () {
      this.signUpForm = {
        username: '',
        pass: ''
      }
      this.signUpForm = {
        username: '',
        email: '',
        pass: '',
        checkPass: ''
      }
      this.$router.push({name: 'mainPage'})
    },
    sign: function () {
      if (this.signUpShow === true && this.signInShow === false) {
        this.signUp().then((data) => {
          this.$router.push({name: 'manage', params: {user: data}})
        }).catch(err => {
          alert('出现错误', err.message)
        })
      } else if (this.signUpShow === false && this.signInShow === true) {
        this.signIn().then((data) => {
          this.$router.push({name: 'manage', params: {user: data}})
        }).catch(err => {
          alert('出现错误', err.message)
        })
      }
    },
    signUp: function () {
      let data = {
        username: this.signUpForm.username,
        password: this.signUpForm.pass,
        email: this.signUpForm.email,
        createAt: new Date()
      }
      return this.$http.post(IP + '/api/signUp', data, {
        withCredentials: true
      }).then(response => {
        return response.data
      }).catch(err => {
        throw new Error(err.message)
      })
    },
    signIn: function () {
      let data = {
        username: this.signInForm.username,
        password: this.signInForm.pass
      }
      return this.$http.post(IP + '/api/signIn', data, {
        withCredentials: true
      }).then(response => {
        return response.data
      }).catch(err => {
        console.log(err)
        throw new Error(err.message)
      })
    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  margin: 0px auto;
  margin-left: 0px;
  margin-right: 0px;
}

.modal-container {
  width: 30%;
  height: 400px;
  vertical-align: middle;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  width: 41%;
  margin: 0 auto;
}

.modal-header .el-button{
  margin-top: 0;
  color: #42b983;
  margin-left: 0px;
  margin-right: 0px;
}

.modal-body {
  margin: 20px 0;
  width: 100%;
  height: 60%;
}

.modal-footer {
  width: 50%;
  margin: 0 auto;
}

.modal-default-button {
  float: right;
}


.signInForm {
  vertical-align: middle;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.fade-enter-active, .fade-leave-active {
  transition: opacity ;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
