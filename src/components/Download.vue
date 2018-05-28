<template>
  <div class="lab-container">
    <div class="single-lab" v-show="labShow" v-for="lab in labs">
      <p class="lab-name">{{lab.name}}</p>
      <video controls  :src="lab.link"  width="300"></video>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      labShow: true,
      labs: [
        {
          name: 'A-bit-about-bites',
          link: 'http://116.62.217.57:8088/video/python-core/a-bit-about-bites.mp4'
        },
        {
          name: 'secret-of-wsgi-master',
          link: 'http://116.62.217.57:8088/video/python-core/secret-of-wsgi-master.mp4'
        },
        {
          name: 'what-is-a-python-core-developer',
          link: 'http://116.62.217.57:8088/video/python-core/what-is-a-python-core-developer.mp4'
        },
        {
          name: 'how-to-write-a-function',
          link: 'http://116.62.217.57:8088/video/python-core/how-to-write-a-function.mp4'
        },
        {
          name: 'taking-django-async',
          link: 'http://116.62.217.57:8088/video/python-core/taking-django-async.mp4'
        }
      ]
    }
  },
  created () {
  },
  update () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lab-container {
  height: auto;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap:wrap;
  width: 80%;
  margin: 0 auto;
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
