<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <canvas id="canvas" width="500" height="500" v-on:mousedown="clickPolygon" v-on:mousemove="movePolygon" v-on:mouseup="stopMovePolygon" v-on:mouseover="stopMovePolygon">
      </canvas>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
//  import _ from 'lodash'

let Polygon = function (x, y, w, h) {
  this.x = x
  this.y = y
  this.w = w
  this.h = h
  this.chosen = false
}

Vue.config.productionTip = false
export default {
  data: function () {
    return {
      msg: 'Welcome to RangeClear Lab',
      polygons: [],
      chosenPolygon: null,
      isMove: false,
      can: document.getElementById('canvas'),
      cxt: null
    }
  },
  created () {
    //  this.init() // 不能在created里操作canvas,因为此时DOM还没有渲染，无法获取到canvas
  },
  methods: {
    init: function () {
      let pointInfo = [
        {
          x: 50,
          y: 300,
          w: 100,
          h: 100
        },
        {
          x: 160,
          y: 300,
          w: 100,
          h: 100
        },
        {
          x: 270,
          y: 300,
          w: 100,
          h: 100
        },
        {
          x: 380,
          y: 300,
          w: 100,
          h: 100
        }
      ]
      pointInfo.forEach(info => {
        let newPolygon = new Polygon(info.x, info.y, info.w, info.h)
        this.polygons.push(newPolygon)
      })
      this.draw()
    },

    draw: function () {
      this.can = document.getElementById('canvas')
      this.cxt = this.can.getContext('2d')
      this.cxt.clearRect(0, 0, this.can.width, this.can.height)
      this.cxt.fillStyle = '#000000'
      this.polygons.forEach(polygon => {
        this.cxt.fillRect(polygon.x, polygon.y, polygon.w, polygon.h)
        this.cxt.globalCompositeOperation = 'xor'
        this.cxt.save()
      })
    },
    clickPolygon: function (event) {
      let clickX = event.layerX
      let clickY = event.layerY
      this.polygons.forEach(polygon => {
        if (clickX >= polygon.x && clickX <= (polygon.x + polygon.w) && clickY >= polygon.y && clickY <= (polygon.y + polygon.h)) {
          if (this.chosenPolygon != null) {
            this.chosenPolygon.chosen = false
          }
          polygon.chosen = true
          this.chosenPolygon = polygon
          this.isMove = true
          this.draw()
        }
      })
    },
    movePolygon: function (event) {
      if (this.isMove === true && this.chosenPolygon != null && this.chosenPolygon.chosen === true) {
        this.chosenPolygon.x = event.layerX
        this.chosenPolygon.y = event.layerY
        this.draw()
      }
    },
    stopMovePolygon: function (event) {
      this.isMove = false
    }
  },
  mounted: function () {
    this.init() //  此时可以操作canvas, 因为dom已经渲染完毕
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 500px;
  margin: auto;
}

.container {
}

#canvas {
  border: 1px solid;
  height: 500px;
  width: 500px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
