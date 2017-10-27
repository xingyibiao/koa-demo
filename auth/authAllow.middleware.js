/*
 * @Author: xingyibiao
 * @Date: 2017-10-25 14:03:52
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-26 15:24:25
 */
const Auth = require('./index.js')

const auth = new Auth()

const AuthAllow = async (ctx, next) => {
  const { authorization } = ctx.header
  let userToken
  if (authorization) {
    userToken = auth.decode(authorization)
  }
  if (userToken && userToken.sub === auth.payload.sub) {
    await next()
  } else {
    ctx.status = 401
    ctx.body = {
      errono: 1,
      errmsg: '您没有访问权限',
    }
  }
}

module.exports = AuthAllow
