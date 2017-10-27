/*
 * @Author: xingyibiao
 * @Date: 2017-10-26 15:08:28
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-26 15:16:42
 */
exports.jsonpTest = (ctx) => {
  const cb = ctx.query.callback
  const data = 'jsonpppp'
  ctx.body = `${cb}("${data}")`
}
