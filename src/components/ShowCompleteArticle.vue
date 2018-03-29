<template>
  <div class="completeArticle">
    <h1 class="articleName">{{articleName}}</h1>
    <span>{{publishAt}}</span>
    <hr style="border: 1px solid #36" />
    <markHtml :mhtml="compiledMarkdown"></markHtml>
    <div class="comment">
      <hr style="border:1px solid #036;clear:both;" />
      <span class="comment-title">评论(共有{{comments.length}}条评论)</span>
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
            <el-button @click="reply(c)" type="text" size="">回复</el-button>
            {{c.date}}
          </div>
          <div class="single-comment--reply" v-show="false" :id="c._id">
            <p>aaaa</p>
          </div>
        </div>
        <hr style="border:.5px solid rgb(179,183,193);clear:both;" />
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
      publishAt: null,
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
        this.article = response.body.data.articleContent
        this.articleName = response.body.data.articleName
        console.log(response)
        this.publishAt = this.getPublishAt(response.body.data.publishAt)
      }).catch(error => {
        console.log(error)
      })
    },
    getPublishAt: function (publishAt) {
      let date = new Date(publishAt)
      let year = date.getFullYear()
      let mon = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
      return year + '-' + mon + '-' + day
    },
    compiledMarkdown: function () {
      return Marked(this.article)
    },
    showComment: function () {
      this.$http.post(IP + '/api/getAllComments', {id: this.id}).then(response => {
        console.log(response.body)
        this.comments = response.body.data
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
        childComment: []
      }
      this.$http.post(IP + '/api/addComment', data).then(response => {
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
    },
    reply: function (c, e) {
      let reply = document.getElementById(c._id)
      reply.style.display = ''
      console.log(e)
    }
  }
}
</script>

<style scoped>
.completeArticle {
  padding-left: 200px;
  padding-right: 200px;
}

@media all and (max-width: 800px) {
  .completeArticle {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media all and (max-width: 600px) {
  .completeArticle {
    padding-left: 10px;
    padding-right: 10px;
  }
}
.articleName{
}

.comment {
}
.comment-title {
  font-size: 3rem;
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
  clear: both;
}
.single-comment--operate {
  display: inline-block;
  width: 100%;
  float: left;
  clear: both;
}
.single-comment--operate img {
  cursor: pointer;
}
.single-comment--reply {
  display: inline-block;
  float: left;
}
</style>
