/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 16:04:15
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-24 17:24:55
 */
const Koa = require('koa')
const router = require('./router')
const staticServer = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

const app = new Koa()


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
