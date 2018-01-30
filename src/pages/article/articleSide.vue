<template>
  <div>
    <div class="github">
      <span>Github</span>
      <hr style="border:1px solid #036" />
      <div class="github__userinfo">
        <img src="https://avatars0.githubusercontent.com/u/3255868?s=40&v=4">
        <p>allenlongbaobao</p>
        <a href="https://github.com/allenlongbaobao" target="blank"><el-button type="primary">Follow</el-button></a>
      </div>
      <div>
        <div class="github__profile" v-for="pro in profile">
          <p class="pro__num">{{pro.num}}</p>
          <p class="pro__item">{{pro.item}}</p>
        </div>
      </div>
    </div>
    <div class="webinfo">
      <span>网站信息</span>
      <hr style="border:1px solid #036" />
      <p>
        <span>文章数量:</span>
        <span>{{articleNum}}</span>
        <span>篇</span>
      </p>
      <p>
        <span>访问数量:</span>
        <span>{{accessNum}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import config from '../../../config/dev.env'
let IP = config.SERVER_IP
export default {
  data () {
    return {
      profile: [{
        item: 'follower',
        num: 12
      },
      {
        item: 'following',
        num: 25
      },
      {
        item: 'star',
        num: 7
      }
      ],
      articleNum: 1,
      accessNum: 1
    }
  },
  created () {
    this.getArticleNum()
  },
  methods: {
    getArticleNum: function () {
      this.$http.get(IP + '/api/getPublishArticleNum').then(response => {
        this.articleNum = response.data.data
      }).catch(err => {
        console.log('err:', err)
      })
    }
  }
}
</script>

<style scoped>
div>img{
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  display: block;
}

.github__userinfo>p {
  padding-top: 30px;
  width: 120px;
  margin: 0 auto;
}

.github__userinfo>a{
  display: block;
  margin:0 auto;
  width: 85px
}

.github__profile {
  width: 99px;
  float: left;
  text-align: center;
}

.github__profile > .pro__num {
  color: green;
}
</style>