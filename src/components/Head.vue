<template>
  <div id='head'>
    <div id="tap">
      <p>Allen's Blog</p>
    </div>
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
          link: '/download',
          content: 'Download'
        }
        /*
        ,
        {
          link: '/manage',
          content: 'Manage'
        }
        */
      ]
    }
  },
  created () {
  }
}
</script>

<style scoped>
#head {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#tap {
  width: 100%;
  height: 300px;
  background-color: black;
  display: flex;
  align-items: center;
}

#tap > p {
  padding-left: 1.5rem;
  color: white;
  font-size: 8rem;
  margin: 0;
}

#navigateBar {
  list-style: none;
  margin: 0; 
  
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: flex-start;
  height: 50px;

}

.singleNavigate a {
  width:100%;/*设置元素宽为80px*/
  height:35px;/*设置高度为28px*/
  line-height:35px;/*设置行距为28px，让文字在每行的中间位置*/
  color:#000;/*文字颜色是白色*/
  font-size:20px;/*用12号字*/
  display:block;/*这个比较关键，因为a本身就是联级元素，本身不具有宽高，用这个把它变成块级元素，这样前面设置的宽和高就能起作用了*/
  text-align:center;/*让文本居中*/
  text-decoration:none; /*去掉下划线*/
  padding: 10px 10px 10px 10px;
}

.singleNavigate a:hover, .singleNavigate a:active {
  line-height:28px;
  border: solid #000;
  border-width: 0 0 1px 0;
}

@media all and (max-width: 800px) {
  #navigateBar {
    justify-content: space-around;
  }
}


@media all and (max-width: 600px) {
  #tap {
    display: none;
  }
  #navigateBar {
    -webkit-flex-flow: column wrap;
    flex-flow: column wrap;
    padding: 0;
    background-color: black;
    height: auto;
  }
  
  #navigateBar a { 
    text-align: center; 
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255,255,255,0.3); 
    border-bottom: 1px solid rgba(0,0,0,0.1); 
    color: white;
    padding-left: 0px;
    padding-right: 0px;
  }

  .singleNavigate a:hover, .singleNavigate a:active {
  line-height:28px;
  border: solid #000;
  border-width: 0 0 1px 0;
  }
  
  #navigateBar li:last-of-type a {
    border-bottom: none;
  }
}
</style>
