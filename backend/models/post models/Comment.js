const sequelize = require('sequelize');
const database = require('../database.js')

const Comment = database.define(
  'comment',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    text: {
      type: sequelize.STRING,
      allowNull: true
    }
  },
  {
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE
  }
)

Comment.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Comment