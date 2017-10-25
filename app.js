/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 16:04:15
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-25 08:48:52
 */
const Koa = require('koa')
const router = require('./router')
const staticServer = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const logger = require('koa-logger')

const app = new Koa()

// logger
app.use(logger())

// bodyParser
app.use(bodyParser())

// router
app.use(router.routes())

// static
app.use(staticServer(path.join(__dirname, 'static')))

// views
app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

// 404
// TODO 500page
app.use(async (ctx, next) => {
  switch (ctx.status) {
    case 404:
      await ctx.render('404')
      break;
    case 500:
      await ctx.render('500')
      break;
    default: next()
  }
})

app.listen(3000, () => {
  console.log('gogogo')
})
