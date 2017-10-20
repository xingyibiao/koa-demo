'use strict'
const Router = require('koa-router')
const router = new Router()

// User Controller
const User = require('../controller/user.controller') 
// MeAccounts Controller
const MeAccounts = require('../controller/meAccounts.controller')

router.get('/api', async(ctx, next) => {
  const data = await readFilePromise(path.resolve(__dirname, './package.json'))
  console.log(data)
  ctx.body = data
})


router.get('/user', User.getUserList)
router.get('/user/id/:id', User.getUserById)
router.get('/user/size/:size', User.getUserBySize)
router.post('/admin/login', MeAccounts.login)

module.exports = router