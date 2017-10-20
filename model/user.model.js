/*
 * @Author: xingyibiao 
 * @Date: 2017-10-20 14:07:09 
 * @Last Modified by:   xingyibiao 
 * @Last Modified time: 2017-10-20 14:07:09 
 */
'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../db/sql.sqlserver')
exports.User = sequelize.define('nodes', {
  LABEL: {
    type: Sequelize.STRING
  },
  SIZE: {
    type: Sequelize.INTEGER
  }
}, {
  createdAt: false,
  updatedAt: false
})
