const sequelize = require('sequelize');
const mysql = require('mysql2');

require('dotenv').config()

const database = new sequelize('fotos', 'mysql_username', 'mysql_password',
  {
    'host': 'localhost',
    'dialect': 'mysql'
  }
)

database.sync()
  .then((data) => {
    console.log('successfully synced the database.')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = database