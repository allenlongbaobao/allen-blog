<template>
  <div class="lab-container">
    <div class="single-lab"  v-for="lab in labs" v-on:click="showLab(lab.link)">
      <p class="lab-name">{{lab.name}}</p>
      <img :src="lab.img" :alt="lab.name">
      <p class="lab--introduce">{{lab.introduce}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      labs: [
        {
          name: 'ReaderAssist',
          link: 'ReaderAssist',
          img: '/static/readerAssist.png',
          introduce: 'a tool for reader add marks and words in web'
        },
        {
          name: 'RangeClear',
          link: 'RangeClear',
          img: '/static/rangeClear.png',
          introduce: 'a game showed in best brain'
        },
        {
          name: '情人节',
          link: 'Valentine',
          img: '/static/youandme.jpg',
          introduce: "a Valentine's gift for my JX"
        }
      ]
    }
  },
  created () {
  },
  update () {
  },
  methods: {
    showLab: function (e) {
      this.$router.push({name: e})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lab-container {
  clear: both;
  height: auto;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
}

.lab-container:after {
  content: '';
  display: block;
  clear: both;
  visibility: hidden;
}

.single-lab {
  width: 300px;
  height: 300px;
  float: left;
  margin-left: 20px;
  margin-top: 30px;
  top: 20px;
  text-align: center;
  cursor: pointer;
}

.single-lab:hover {
  border-radius:25px;
  border: #aaa 1px dashed;  
  box-shadow:inset 0 -5px 8px -7px rgba(81, 81,81,0.8);
}

.single-lab > img {
  width: 160px;
  height: 200px;
}

.lab--introduce {
  top: 250px;
}

@media all and (max-width: 600px) {
  .lab-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
