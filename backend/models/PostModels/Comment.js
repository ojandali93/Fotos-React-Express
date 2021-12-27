const sequelize = require('sequelize');
const database = require('../database.js')
const User = require('../UserModels/Users.js')
const Post = require('../PostModels/Posts.js')

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

User.hasMany(Comment, {as: 'userId', foreignKey: {name: 'userId'}})
Post.hasMany(Comment, {as: 'post', foreignKey: {name: 'post'}})

Comment.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Comment