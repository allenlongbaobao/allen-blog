<template>
  <div class="lab-container">
    <slider v-bind="setting" @view="showLab"></slider>
  </div>
</template>

<script>
import slider from '@/pages/common/slider.vue'
//  import slider from 'vue-image-scroll'
export default {

  data: function () {
    return {
      setting: {
        styleObject: {
          width: '750',
          height: '450',
          borderRadius: '20px'
        },
        image: [
        /*
          {
            src: 'static/readerAssist.png',
            link: 'ReaderAssist',
            tagName: 'a tool for reader add marks and words in web',
            tagStyle: {
              color: 'white',
              fontSize: '20px'
            }
          },
        */
          {
            src: 'static/rangeClear.png',
            link: 'RangeClear',
            tagName: 'RangeClear',
            tagStyle: {
              color: 'white',
              fontSize: '20px'
            }
          },
          {
            src: 'static/shop-snap.jpg',
            link: 'VueShop',
            tagName: 'VueShop',
            tagStyle: {
              color: 'white',
              fontSize: '20px'
            }
          },
          {
            src: 'static/Valentine.jpg',
            link: 'Valentine',
            tagName: 'Valentine',
            tagStyle: {
              color: 'white',
              fontSize: '20px'
            }
          },
          {
            src: 'static/selection.jpg',
            link: 'Selection',
            tagName: 'Selection',
            tagStyle: {
              color: 'white',
              fontSize: '20px'
            }
          }
        ],
        interval: 1000,
        imgStyle: {
          borderRadius: '20px'
        },
        autoRoll: false,
        direction: 'right'
      }
    }
  },
  created () {
  },
  update () {
  },
  components: {
    slider: slider
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 20px;
}

@media all and (max-width: 600px) {
  .lab-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
