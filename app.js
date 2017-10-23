/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 16:04:15
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:30:52
 */
const Koa = require('koa')
const router = require('./router')
const staticServer = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

// bodyParser
app.use(bodyParser())

// router
app.use(router.routes())

// static
app.use(staticServer(path.join(__dirname, 'static')))

app.listen(3000, () => {
  console.log('gogogo')
})
