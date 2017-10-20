/*
 * @Author: xingyibiao 
 * @Date: 2017-10-20 16:04:15 
 * @Last Modified by:   xingyibiao 
 * @Last Modified time: 2017-10-20 16:04:15 
 */

'use strict'
const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const _static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')

// bodyParser
app.use(bodyParser())

// router
app.use(router.routes())

// static
app.use(_static(path.resolve(__dirname, 'static')))

app.listen(3000, () => {
  console.log('gogogo')
})