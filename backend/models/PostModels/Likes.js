const sequelize = require('sequelize');
const database = require('../database.js')
const User = require('../UserModels/Users.js')
const Post = require('../PostModels/Posts.js')

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
    timestamp: true
  }
) 

User.hasMany(Like, {as: 'credentialId', foreignKey: {name: 'credentialId'}})  
Post.hasMany(Like, {as: 'postId', foreignKey: {name: 'postId'}})

Like.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Like