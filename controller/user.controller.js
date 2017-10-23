/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 13:16:38
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:47:08
 */
const { User } = require('../model/user.model')

// get all user
exports.getUserList = async (ctx) => {
  const users = await User.findAll()
  ctx.body = users
}

// get by id
exports.getUserById = async (ctx) => {
  const { id } = ctx.params
  const users = await User.findById(id)
  ctx.body = users
}

// get by size
exports.getUserBySize = async (ctx) => {
  const { size } = ctx.params
  const users = await User.findAll({
    where: { SIZE: size },
  })
  ctx.body = users
}
