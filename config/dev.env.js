'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_IP: 'https://www.allenwang.top'
  //SERVER_IP: 'http://localhost:8088'
  //SERVER_IP: 'https://localhost:8089'
})
