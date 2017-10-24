const Sequelize = require('sequelize')

const sequelize = new Sequelize('tjp_db', 'sa', 'sa123!', {
  host: 'localhost',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('连接数据库成功')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = sequelize
