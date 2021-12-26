const sequelize = require('sequelize');
const database = require('../database.js')

const Download = database.define(
  'download',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE
  }
)

Download.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Download