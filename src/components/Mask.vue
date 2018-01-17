<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <canvas id="canvas" width="500" height="500" v-on:mousedown="recordStartPoint($event)" v-on:mouseup="recordEndPoint($event)">
    </canvas>
    <button id="cancel" v-on:click="back()">返回</button>
    <button id="certain" v-on:click="finishFrameAndShowInput">确定</button>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.config.productionTip = false
class Mask {
  leftX
  leftY
  rightX
  rightY // 框体位置
  notes // 笔记内容
  constructor (x1, x2, y1, y2, notes) {
    this.leftX = x1
    this.leftY = x2
    this.rightX = y1
    this.rightY = y2
    this.notes = notes
  }
  changeNotes (newNotes) {
    this.notes = newNotes
  }
}
export default {
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      startPoint: {
        x: 0,
        y: 0
      },
      endPoint: {
        x: 0,
        y: 0
      },
      can: document.getElementById('canvas'),
      cxt: null
    }
  },
  methods: {
    draw: function () {
      this.can = document.getElementById('canvas')
      this.cxt = this.can.getContext('2d')
      this.cxt.fillStyle = '#FF0000'
      this.cxt.strokeStyle = '#FF0000'
      this.cxt.linewidth = 10
      var startX = this.startPoint.x
      var startY = this.startPoint.y
      var endX = this.endPoint.x
      var endY = this.endPoint.y
      // cxt.fillRect(startX, startY, endX - startX, endY - startY)
      this.cxt.strokeRect(startX, startY, endX - startX, endY - startY)
      this.cxt.save()
      this.showTips(this.cxt)
    },
    showTips: function (frame) {
      let mask = new Mask()
      console.log(frame)
      console.log(mask)
    },
    back: function () {
      this.cxt.restore()
    },
    finishFrameAndShowInput: function () {
    },
    showSaveOption: function (c) {
    },
    recordStartPoint: function (e) {
      this.startPoint.x = e.layerX
      this.startPoint.y = e.layerY
    },
    recordEndPoint: function (e) {
      this.endPoint.x = e.layerX
      this.endPoint.y = e.layerY
      this.draw()
      this.showSaveOption()
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  padding: 0;
  margin: 0;
}
#canvas {
  border: 1px 1px solid;
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
