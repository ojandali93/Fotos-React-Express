const sequelize = require('sequelize');
const database = require('../database.js')
const userModel = require('../UserModels/Credentials.js')
const postModel = require('../PostModels/Posts.js')

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
    timestamp: true
  }
)

userModel.hasMany(Comment)
postModel.hasMany(Comment)

Comment.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Comment