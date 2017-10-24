/*
 * @Author: xingyibiao
 * @Date: 2017-10-23 15:04:20
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 17:31:06
 */
const Sequelize = require('sequelize')
const sequelize = require('../db/sql.sqlserver')

exports.Product = sequelize.define('P_product', {
  productno: {
    type: Sequelize.STRING,
  },
  productname: {
    type: Sequelize.STRING,
  },
  summary: {
    type: Sequelize.STRING,
  },
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true, // 阻止自动将表名加为复数
})
