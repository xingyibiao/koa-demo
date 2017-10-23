/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 16:20:06
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:35:01
 */
const jwt = require('jwt-simple')

const secret = 'secret'
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
}
const token = jwt.encode(payload, secret)
const decode = jwt.decode(token, secret)
console.log(token, decode)
