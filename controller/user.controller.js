/*
 * @Author: xingyibiao 
 * @Date: 2017-10-20 13:16:38 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-20 14:05:50
 */
'use strict'
const { User } = require('../model/user.model')

// get all user
exports.getUserList = async(ctx, next) => {
  const users = await User.findAll()
  ctx.body = users
}

// get by id
exports.getUserById = async(ctx, next) => {
  const id = ctx.params.id
  const users = await User.findById(id)
  ctx.body = users
}

// get by size
exports.getUserBySize = async(ctx, next) => {
  const size = ctx.params.size
  const users = await User.findAll({
    where: {SIZE: size}
  })
  ctx.body = users
}