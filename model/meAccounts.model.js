/*
 * @Author: xingyibiao
 * @Date: 2017-10-20 14:06:56
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-10-23 14:39:01
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
})
