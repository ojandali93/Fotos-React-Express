const sequelize = require('sequelize');
const database = require('../database.js')

const Like = database.define(
  'like',
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

Like.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Like