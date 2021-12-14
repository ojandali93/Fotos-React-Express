const sequelize = require('sequelize');
const mysql = require('mysql2');

require('dotenv').config()

const database = new sequelize('fotos', 'omarjandali', 'Kabuto_razer21',
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