/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 14:06:56
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-25 13:50:16
 */
const Sequelize = require('sequelize')
const sequelize = require('../db/sql.sqlserver')

// apMember model
exports.MeAccounts = sequelize.define('ME_AccountS', {
  UserName: {
    type: Sequelize.STRING,
  },
  Name: {
    type: Sequelize.STRING,
  },
  PassWord: {
    type: Sequelize.STRING,
  },
  SEX: {
    type: Sequelize.INTEGER,
  },
}, {
  createdAt: false,
  updatedAt: false,
  freezeTableName: true, // 阻止自动将表名加为复数
})
