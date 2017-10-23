/*
 * @Author: xingyibiao
 * @Date: 2017-10-23 14:35:22
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:38:10
 */

const Router = require('koa-router')
const path = require('path')
const { readFilePromise } = require('../utils/index')
// User Controller
const User = require('../controller/user.controller')
// MeAccounts Controller
const MeAccounts = require('../controller/meAccounts.controller')

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

module.exports = router
