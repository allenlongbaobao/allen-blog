<template>
  <div class="completeaArticle">
    <h1 class="articleName">{{articleName}}</h1>
    <hr style="border: 1px solid #36" />
    <markHtml :mhtml="compiledMarkdown"></markHtml>
    <div class="comment">
      <hr style="border:1px solid #036;clear:both;" />
      <span class="comment-title">评论</span>
      <div class="add-comment">
        <el-input class="comment-userinfo" id="commentUsername" type="text" name="username" placeholder="username"></el-input>
        <el-input class="comment-userinfo" id="commentUseremail" type="text" name="useremail" placeholder="email"></el-input>
        <el-input class="comment-userinfo" id="commentUserblog" type="text" name="userblog" placeholder="blog"></el-input>
        <textarea id="commentContent" placeholder="发表看法"></textarea>
        <el-button @click="addComment">提交</el-button>
      </div>
      <div class="single-comment" v-for="c in comments">
        <div class="single-comment--username--div">
          <a :href="c.user.blog" v-if="c.user.blog">{{c.user.name}}</a>
          <span class="single-comment--username" v-if="!c.user.blog">{{c.user.name}}</span>
          <span>说:</span>
        </div>
        <div class="single-comment--content--div">
          <div class="single-comment--content">
            {{c.content}}
          </div>
          <div class="single-comment--operate">
            <img @click="addLikeNum" src="/static/heart-outline.png" alt="1" :title="c._id">
            <span>{{c.likeNum}}</span>
            <a href="">回复</a>
            {{c.date}}
          </div>
        </div>
        <hr style="border:1px dashed #036;clear:both;" />
      </div>
    </div>
  </div>
</template>

<script>
import Marked from 'marked'
import markHtml from '../pages/common/MarkHtml'
import env from '../../config/dev.env.js'
let IP = env.SERVER_IP
export default {
  data () {
    return {
      id: null,
      article: '',
      articleName: '',
      comments: []
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
    this.id = this.$route.params.id
    this.getArticleById(this.$route.params.id)
    this.showComment()
  },
  methods: {
    getArticleById: function (id) {
      this.$http.post(IP + '/api/getArticleById', {id: id}).then(response => {
        this.article = response.data.data.articleContent
        this.articleName = response.data.data.articleName
      }).catch(error => {
        console.log(error)
      })
    },
    compiledMarkdown: function () {
      return Marked(this.article)
    },
    showComment: function () {
      this.$http.post(IP + '/api/getAllComments', {id: this.id}).then(response => {
        console.log(response.data)
        this.comments = response.data.data
      }).catch(error => {
        console.log(error)
      })
    },
    getData: function () {
      /*
        下一步优化方向
       */
    },
    addComment: function () {
      let user = document.getElementById('commentUsername')
      let email = document.getElementById('commentUseremail')
      let blog = document.getElementById('commentUserblog')
      let content = document.getElementById('commentContent')
      let data = {
        user: {
          name: user.value,
          email: email.value,
          blog: blog.value || null
        },
        content: content.value,
        aid: this.id,
        likeNum: 0,
        disNum: 0,
        date: new Date(),
        childComment: []
      }
      this.$http.post(IP + '/api/addComment', data).then(response => {
        console.log('增加评论成功')
        console.log(this.comments)
        this.comments.unshift(response.data.data)
        user.value = ''
        content.value = ''
        email.value = ''
        blog.value = ''
      }).catch(error => {
        console.log(error)
      })
    },
    addLikeNum: function (e) {
      if (e.target.alt === '1') {
        e.target.src = '/static/heart.png'
        let data = {
          cid: e.target.title
        }
        this.$http.post(IP + '/api/addLikeToComment', data).then(response => {
          e.target.nextElementSibling.innerHTML = response.body.data
        })
        e.target.alt = '0'
      } else {
        e.target.src = '/static/heart-outline.png'
        let data = {
          cid: e.target.title
        }
        this.$http.post(IP + '/api/removeLikeFromComment', data).then(response => {
          e.target.nextElementSibling.innerHTML = response.body.data
        })
        e.target.alt = '1'
      }
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
}

.comment {
}
.comment-title {
  font-size: 50px;
}

.add-comment {
}

.comment-userinfo {
  width: 32%;
  margin-bottom: 5px;
}
.username {
  margin-bottom: 8px;
}

#commentContent {
  width: 99%;
  height: 80px;
  resize: none;
  border-radius: 5px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1); 
  font-size: 20px;
}

.single-comment {
  margin-bottom: 50px;
  font-size: 15px;
  width: 100%;
  float: left;
  clear: both;
}
.single-comment--username--div {
  float: left;
  width: 15%;
  height: 100px;
}
.single-comment--content--div {
  width: 70%; 
  float: left;
  margin-left: 10px;
}
.single-comment--username {
  color: red;
}
.single-comment--content {
  display: inline-block;
  width: 100%;
  height: auto;
  font-size: 23px;
  float: left;
}
.single-comment--operate {
  display: inline-block;
  width: 80%;
  float: left;
}
.single-comment--operate img {
  cursor: pointer;
}
</style>
