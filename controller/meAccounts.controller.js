/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 14:19:01
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-25 14:16:28
 */
const crypto = require('crypto')
const Auth = require('../auth')
const { MeAccounts } = require('../model/meAccounts.model')

// login
exports.login = async (ctx) => {
  const { body } = ctx.request
  const { userName } = body
  const { passWord } = body
  const md5 = crypto.createHash('md5')
  const result = {
    errno: 0,
    errmsg: 'success',
    data: null,
  }
  const hashPwd = md5.update(passWord).digest('hex').toUpperCase()
  try {
    const user = await MeAccounts.find({
      where: {
        UserName: userName,
      },
    })
    if (user && user.PassWord === hashPwd) {
      const payload = {
        userName: user.UserName,
        name: user.Name,
        sex: user.SEX,
      }
      const auth = new Auth()
      result.token = auth.encode(payload)
    } else {
      result.errno = 1
      result.errmsg = '密码错误'
    }
  } catch (err) {
    result.errno = 1
    result.errmsg = '服务器错误'
    result.data = err
  }
  ctx.body = result
}
