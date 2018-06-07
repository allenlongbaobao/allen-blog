<template>
  <div class="wraper">
    <div class="nav">
      <router-link class="title" to="/" tag="a">
        <img src="../../static/logo.png">
      Allen's House
      </router-link>
      <ul id="navigater">
        <li class="singleNavigate" v-for="item in items">
          <router-link :to="item.link">{{ item.content }}</router-link>
        </li>
      </ul>
    </div>
    <div class="image-and-intro">
      <div class="left-part">
        <img id="main-left-img" src="../../static/main-left-img.jpg" :style="'height:' + clientHeight + 'px;'">
      </div>
      <div class="right-part">
        <p>Front-end Developer</p>
        <p>Perpetually Mixing
        </br>
        <span class="bold">Function And Creation</span>
        </p>
        <p>Allways love searching feathure online and offline.I believe "Clean Code" drives Development and simple within logistic code makes world running better.</p>
        <p>In short, analyze and practices make me more powerful!</p>
      </div>
    </div>
    <div class="skill" :style="'height:' + clientHeight + 'px;'">
      <p>My Stack</p>
      <ul>
        <li class="skill-item" v-for="(value, key) in skills">
          <span>{{key}}</span>
          <span>{{value}}</span>
        </li>
      </ul>
    </div>
    <div class="mask fade-out">
    </div>
  </div>
</template>

<script>
export default {
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
  ],
  skills: {
    'JavaScript': 'Vue, Vuex, Vue Router, ES 6',
    'Automation & Bunding': 'Webpack, Gulp',
    'Server': 'Linux, Unix, Shell',
    'Database': 'MongoDB, Redis, Mysql',
    'Mobile': 'wx 小程序',
    'Version Control': 'Git, Npm'
  },
  watch () {
  },
  created () {
  },
  mounted () {
  },
  computed: {
    items: function () {
      return this.$options.items
    },
    clientHeight: function () {
      return window.innerHeight
    },
    skills: function () {
      return this.$options.skills
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.cnpmjs.org/css?family=Lobster|Roboto|Tangerine');
@import '../assets/common.css';

.wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  height: 100%;

  .nav {
    position: absolute;
    width: 80%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    .title {
      font-family: 'Lobster', cursive;
      color: white;
      font-size: 30px;
      text-decoration: none;
      display: flex;
      align-items: center;
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

  .image-and-intro {
    display: flex;
    height: 100%;

    .left-part {
      display: flex;
      flex: .5;

      img {
        height: 100%;
        flex: 1;
      }
    }

    .right-part {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: .5;
      background-color: black;
      color: white;

      p {
        font-family: 'Roboto-Bold', sans-serif;
        font-size: 20px;
        text-align: left;
        width: 80%;
      }

      .bold {
        font-size: 40px;
      }
    }
  }

  .skill {
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    p {
      font-size: 30px;
      margin-top: 100px;
    }

    ul {
      list-style: none;
      width: 80%;

      .skill-item {
        font-family: 'Roboto-Bold', sans-serif;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px 0 10px;
        margin-bottom: .5px;
        height: 60px;
        font-size: 18px;
        border-bottom: .5px solid rgba(244, 244, 244, .2);
      }

      .skill-item:hover {
        background-color: rgb(36, 46, 229);
        border-bottom: .5px solid rgb(36, 46, 229);
      }
    }

  }

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -1;
  }
}

</style>
