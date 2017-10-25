/*
 * @Author: xingyibiao
 * @Date: 2017-10-23 15:03:28
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-25 16:00:52
 */
const { Product } = require('../model/product.model')

exports.getProductsList = async (ctx, next) => {
  try {
    const pageSize = 10
    const pageNo = ctx.query.pageNo || 1
    const data = await Product.findAll({ offset: (pageNo - 1) * pageSize, limit: pageSize })
    ctx.body = data
  } catch (error) {
    ctx.status = 500
    await next()
  }
}

exports.test500 = (ctx, next) => {
  try {
    ctx.status = 500
    next()
  } catch (err) {
    ctx.status = 500
    next(err)
  }
}
