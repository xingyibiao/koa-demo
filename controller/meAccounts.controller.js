/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 14:19:01
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:49:13
 */
const crypto = require('crypto')
const jwt = require('jwt-simple')
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
      result.token = jwt.encode(payload, 'hahaha')
    } else {
      result.errno = 1
      result.errmsg = '密码错误'
    }
  } catch (err) {
    result.errno = 1
    result.errmsg = '服务器错误'
  }
  ctx.body = result
}
