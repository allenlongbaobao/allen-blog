<template>
  <div id='head'>
    <img src="../assets/banner.jpg">
    <h1 id="sign">{{ msg }}</h1>
    <ul id="navigateBar">
      <li class="singleNavigate" v-for="item in items">
        <router-link :to="item.link">{{ item.content }}</router-link>
      </li>
    </ul>
    <router-view name='homePage'> </router-view>
  </div>

</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      msg: 'i am allen, a software engineer!',
      items: [
        {
          link: '/',
          content: '主页'
        },
        {
          link: '/article',
          content: '文章'
        },
        {
          link: '/lab',
          content: '实验室'
        }
      ]
    }
  }
}
</script>

<style>
#head {
  width: 100%;
}
img {
  width: 100%;
  height: 300px;
}
#sign {
  position: absolute;
  color: white;
  top: 5px;
  left: 10px;
}
#navigateBar {
  width:auto;/*设置元素宽度为980px*/
  border:1px solid #000;/*设置一个颜色为#000，宽度为1px的边框*/
  margin:0px auto 0px auto;/*也可以简写为margin:0 auto*/
  height: 35px;
}
ul .singleNavigate {
  list-style: none;
  float:left;
  background: black;
}

.singleNavigate a {
  width:80px;/*设置元素宽为80px*/
  height:35px;/*设置高度为28px*/
  line-height:35px;/*设置行距为28px，让文字在每行的中间位置*/
  background:black;/*设置元素的背景为红色*/
  color:#FFF;/*文字颜色是白色*/
  font-size:12px;/*用12号字*/
  display:block;/*这个比较关键，因为a本身就是联级元素，本身不具有宽高，用这个把它变成块级元素，这样前面设置的宽和高就能起作用了*/
  text-align:center;/*让文本居中*/
  text-decoration:none; /*去掉下划线*/
}

.singleNavigate a:hover{
  width:78px;
  height:33px;
  line-height:28px;
  border:1px solid ;
  background:#111;
}
</style>
