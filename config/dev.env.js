'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_IP: 'http://116.62.217.57:8088'
  //SERVER_IP: 'http://localhost:8088'
})
