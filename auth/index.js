/*
 * @Author: xingyibiao
 * @Date: 2017-10-25 10:45:57
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-25 14:32:14
 */
const _ = require('lodash')
const jwt = require('jwt-simple')

class Auth {
  constructor() {
    this.secret = 'dashuige'
    this.payload = {
      sub: 'xingyibiao',
    }
  }
  encode(payload) {
    const prePayload = _.merge(this.payload, payload)
    const token = jwt.encode(prePayload, this.secret)
    return token
  }
  decode(token) {
    return jwt.decode(token, this.secret)
  }
}

module.exports = Auth
