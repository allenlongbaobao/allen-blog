<template>
  <div id='head'>
    <img src="../assets/banner.jpg">
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
          content: 'Main'
        },
        {
          link: '/article',
          content: 'Article'
        },
        {
          link: '/lab',
          content: 'Lab'
        },
        {
          link: '/manage',
          content: 'Manage'
        }
      ]
    }
  }
}
</script>

<style scoped>
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
  margin:0px auto 0px auto;/*也可以简写为margin:0 auto*/
  height: 35px;
}
ul .singleNavigate {
  list-style: none;
  float:left;
}

.singleNavigate a {
  width:80px;/*设置元素宽为80px*/
  height:35px;/*设置高度为28px*/
  line-height:35px;/*设置行距为28px，让文字在每行的中间位置*/
  color:#000;/*文字颜色是白色*/
  font-size:17px;/*用12号字*/
  display:block;/*这个比较关键，因为a本身就是联级元素，本身不具有宽高，用这个把它变成块级元素，这样前面设置的宽和高就能起作用了*/
  text-align:center;/*让文本居中*/
  text-decoration:none; /*去掉下划线*/
  padding-left: 10px;
}

.singleNavigate a:hover, .singleNavigate a:active {
  width:78px;
  height:33px;
  line-height:28px;
  border: solid #000;
  border-width: 0 0 1px 0;
}
</style>
