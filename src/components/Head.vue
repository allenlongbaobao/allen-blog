<template>
  <div class="nav">
    <router-link class="title" to="/">Allen's House</router-link>
      <ul id="navigater">
        <li class="singleNavigate" v-for="item in items">
          <router-link :to="item.link">{{ item.content }}</router-link>
        </li>
    </ul>
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
          link: '/blog',
          content: 'Blog'
        },
        {
          link: '/project',
          content: 'Project'
        },
        {
          link: '/',
          content: 'Contract'
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.cnpmjs.org/css?family=Lobster|Roboto|Tangerine');
@import '../assets/common.css';
.nav {
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 0 20px 0 20px;

  .title {
    font-family: 'Lobster', cursive;
    color: white;
    font-size: 30px;
    text-decoration: none;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    list-style: none;

    li {
      padding-left: 10px;
      margin-left: 50px;

      a {
        color: white;
        text-decoration: none;
        font-family: 'Roboto-Bold', sans-serif;
        position: relative;
      }

      a::before {
        content:"";
        position:absolute;
        left:0;
        bottom:-2px;
        height:2px;
        width:100%;
        background:#fff;
        transform: scale(0);
        transition:all 0.3s;
      }
      a:hover::before {
        transform: scale(1);
      }
    }
  }
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
