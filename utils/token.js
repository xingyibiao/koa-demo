/*
 * @Author: xingyibiao 
 * @Date: 2017-10-20 16:20:06 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-20 17:18:58
 */
'use strict'
const crypto = require('crypto')
const jwt = require('jwt-simple')
const header = {
  typ: 'JWT',
  alg: 'HS256'
}
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true
}
const token = jwt.encode(payload, secret)
const decode = jwt.decode(token, secret)
console.log(token, decode)
// console.log(jwt_header + '.' + jwt_payload + '.' + hash)