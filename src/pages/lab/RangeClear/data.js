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

export default {
  vectors: [
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
  ],
  getInitPolygons: function () {
    let polygons = []
    pointInfo.forEach(point => {
      let P = new Polygon(point)
      polygons.push(P)
    })
    return polygons
  }
}
