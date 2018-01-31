<template>
  <div class="body">
    <p><b>A</b>llen's blog</p>
    <ul id="navigateBar">
      <li class="singleNavigate" v-for="item in items">
        <router-link :to="item.link">{{ item.content }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
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
          }
        ]
      }
    }
  }
</script>

<style scoped>
.body {
  height: 680px;
  background-color: rgb(220,220,220);
  text-align: center;
  margin: 0;
  padding: 0;
}

div>p {
  position: relative;
  display: inline-block;
  margin-top: 18%;
  font-size:50px;
}

#navigateBar {
  width:300px;/*设置元素宽度为980px*/
  height: 35px;
  margin-left: auto;
  margin-right:auto;
}
ul .singleNavigate {
  list-style: none;
  float:left;
}

.singleNavigate a {
  width:80px;/*设置元素宽为80px*/
  height:35px;/*设置高度为28px*/
  line-height:35px;/*设置行距为28px，让文字在每行的中间位置*/
  font-size:18px;/*用12号字*/
  display:block;/*这个比较关键，因为a本身就是联级元素，本身不具有宽高，用这个把它变成块级元素，这样前面设置的宽和高就能起作用了*/
  text-align:center;/*让文本居中*/
  text-decoration:none; /*去掉下划线*/
}

.singleNavigate a:hover{
  width:78px;
  height:33px;
  line-height:28px;
  font-size: 25px;
}
</style>
