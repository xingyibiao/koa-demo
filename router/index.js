/*
 * @Author: xingyibiao
 * @Date: 2017-10-23 14:35:22
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-25 15:49:08
 */

const Router = require('koa-router')
const path = require('path')
const { readFilePromise } = require('../utils/index')

// User Controller
const User = require('../controller/user.controller')

// MeAccounts Controller
const MeAccounts = require('../controller/meAccounts.controller')

// Product Controller
const Product = require('../controller/product.controller')

// token鉴权中间件
const AuthAllow = require('../auth/authAllow.middleware')

// const auth = new AuthAllow()
const router = new Router()

router.get('/api', async (ctx) => {
  const data = await readFilePromise(path.resolve(__dirname, './package.json'))
  console.log(data)
  ctx.body = data
})


router.get('/user', User.getUserList)
router.get('/user/id/:id', User.getUserById)
router.get('/user/size/:size', User.getUserBySize)
router.post('/admin/login', MeAccounts.login)
router.get('/products', AuthAllow, Product.getProductsList)
router.get('/test500', Product.test500)

module.exports = router
