<template>
  <div class="wraper" :style="'height:' + clientHeight + 'px;'">
    <div class="nav">
      <span>Allen's House</span>
      <ul id="navigater">
        <li class="singleNavigate" v-for="item in items">
          <router-link :to="item.link">{{ item.content }}</router-link>
        </li>
      </ul>
    </div>
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
</template>

<script>
export default {
  items: [
    {
      link: '/',
      content: 'Blog'
    },
    {
      link: '/',
      content: 'Project'
    },
    {
      link: '/',
      content: 'About'
    },
    {
      link: '/',
      content: 'Contract'
    }
  ],
  data () {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster|Roboto|Tangerine');

.wraper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  .nav {
    position: absolute;
    width: 80%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    span {
      font-family: 'Lobster', cursive;
      color: white;
      font-size: 30px;
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
        }
      }
    }
  }

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
    height: 100%;


    p {
      font-size: 20px;
      text-align: left;
      width: 80%;
    }

    .bold {
      font-size: 40px;
    }
  }

}

</style>
