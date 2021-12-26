const sequelize = require('sequelize');
const database = require('../database.js')

const Edit = database.define(
  'edit',
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

Edit.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Edit