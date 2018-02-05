import _ from 'lodash'
let Polygon = function (P) {
  this.x = P.x
  this.y = P.y
  this.w = P.w
  this.h = P.h
  this.chosen = false
}

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
let vectors = [
  {
    X: 50,
    Y: -50
  },
  {
    X: -100,
    Y: 0
  },
  {
    X: 50,
    Y: -50
  }
]
export default {
  vectors,
  getInitPolygons: function () {
    let polygons = []
    pointInfo.forEach(point => {
      let P = new Polygon(point)
      polygons.push(P)
    })
    return polygons
  },
  getTempPolygons: function () {
    let tempPolygons = []
    let tempInfo = _.cloneDeep(pointInfo) //  深拷贝
    tempPolygons.push(new Polygon(pointInfo[0]))
    for (let i = 1; i < tempInfo.length; i++) {
      tempInfo[i].x = tempInfo[i - 1].x + vectors[i - 1].X
      tempInfo[i].y = tempInfo[i - 1].y + vectors[i - 1].Y
      let P = new Polygon(tempInfo[i])
      tempPolygons.push(P)
    }
    return tempPolygons
  }
}
