<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <h3>your score: {{score}}</h3>
      <canvas id="temp" width="100" height="100"></canvas>
      <canvas id="canvas" width="500" height="500" v-on:mousedown="clickPolygon" v-on:mousemove="movePolygon" v-on:mouseup="stopMovePolygon" v-on:mouseover="stopMovePolygon">
      </canvas>
      <el-button @click="resetCanvas">复位</el-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import _ from 'lodash'
import DATA from './RangeClear/data'

Vue.config.productionTip = false
export default {
  data: function () {
    return {
      msg: 'Welcome to RangeClear Lab',
      score: 0,
      polygons: [],  //  多边形数组
      tempPolygons: [], //  最终图形数组
      relativeDiffX: 0,  //  点击点X与图形原点X的差值
      relatvieDiffY: 0,  //  点击点Y与图形原点Y的差值
      correct: true,  //  是否符合最终图形判断
      chosenPolygon: null, // 点击选中的图形
      isMove: false,  //  是否移动判断
      can: document.getElementById('canvas'),
      cxt: null
    }
  },
  created () {
    //  this.init() // 不能在created里操作canvas,因为此时DOM还没有渲染，无法获取到canvas
  },
  methods: {
    init: function () {
      this.polygons = DATA.getInitPolygons()
      this.tempPolygons = DATA.getTempPolygons()
      this.showTemp()
      this.draw()
    },
    resetCanvas: function () {
      this.init()
    },
    showTemp: function () {
      let can = document.getElementById('temp')
      let cxt = can.getContext('2d')
      cxt.clearRect(0, 0, can.width, can.height)
      cxt.fillStyle = '#000000'
      this.tempPolygons.forEach(polygon => {
        cxt.fillRect(polygon.x / 5, polygon.y / 5, polygon.w / 5, polygon.h / 5)
        cxt.globalCompositeOperation = 'xor'
        cxt.save()
      })
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
      /*
      let clickX = event.layerX
      let clickY = event.layerY
      */
      let clickX = event.pageX - this.can.offsetLeft
      let clickY = event.pageY - this.can.offsetTop
      this.polygons.forEach(polygon => {
        if (clickX >= polygon.x && clickX <= (polygon.x + polygon.w) && clickY >= polygon.y && clickY <= (polygon.y + polygon.h)) {
          if (this.chosenPolygon != null) {
            this.chosenPolygon.chosen = false  // 之前选中的图形取消选中
          }
          polygon.chosen = true
          this.chosenPolygon = polygon
          this.isMove = true
          this.relativeDiffX = polygon.x - clickX  //  计算差值X
          this.relativeDiffY = polygon.y - clickY  //  计算差值Y
          console.log('relativeDiffX,', this.relativeDiffX)
          console.log('relativeDiffY,', this.relativeDiffY)
        }
      })
    },
    movePolygon: function (event) {
      if (this.isMove === true && this.chosenPolygon != null && this.chosenPolygon.chosen === true) {
        this.chosenPolygon.x = event.pageX - this.can.offsetLeft + this.relativeDiffX
        this.chosenPolygon.y = event.pageY - this.can.offsetTop + this.relativeDiffY
        console.log('chosenPolygon.x', this.chosenPolygon.x)
        console.log('chosenPolygon.y', this.chosenPolygon.y)
        this.draw()
      }
    },
    stopMovePolygon: function (event) {
      this.isMove = false
      this.relativeDiffX = 0
      this.relatvieDiffY = 0
      this.check()  //  停止移动后判断是否正确
    },
    check: function (event) {
      this.sortPolygonsByY().then(() => {
        for (let i = 0; i < this.polygons.length - 1; i++) {
          let vector = this.getVector(this.polygons[i], this.polygons[i + 1])
          this.compareVector(vector, DATA.vectors[i])
        }
        if (this.correct === 1) {
          alert('congratulations')
          this.score += 100
          this.resetCanvas()
        } else {
          this.correct = true
        }
      })
    },
    sortPolygonsByY: function () {
      return new Promise((resolve, reject) => {
        this.polygons = _.sortBy(this.polygons, ['y', 'x'])
        resolve()
      })
    },
    getVector: function (frontPolygon, backPolygon) {
      let vector = {
        X: 0,
        Y: 0
      }
      vector.X = frontPolygon.x - backPolygon.x
      vector.Y = frontPolygon.y - backPolygon.y
      return vector
    },
    compareVector: function (vectorToCompare, correctVector) {
      if (Math.abs(vectorToCompare.X - correctVector.X) < 3 && Math.abs(vectorToCompare.Y - vectorToCompare.Y) < 3) {
        this.correct &= true
        console.log('正确')
      } else {
        this.correct &= false
        console.log('不正确')
      }
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
