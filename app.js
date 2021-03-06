/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 16:04:15
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-26 15:46:50
 */
const Koa = require('koa')
const router = require('./router')
const staticServer = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const logger = require('koa-logger')

const app = new Koa()

// views
app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

// err handler
app.use(async (ctx, next) => {
  try {
    await next()
    if (ctx.status === 404) { // 404 不属于服务器错误，不能用catch捕获
      await ctx.render('404')
    }
  } catch (err) {
    await ctx.render('500')
  }
})

// logger
app.use(logger())

// bodyParser
app.use(bodyParser())

// router
app.use(router.routes())

// static
app.use(staticServer(path.join(__dirname, 'static')))


app.listen(3000, () => {
  console.log('gogogo')
})
