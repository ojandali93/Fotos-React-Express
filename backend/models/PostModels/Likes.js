const sequelize = require('sequelize');
const database = require('../database.js')
const UserModel = require('../UserModels/Credentials.js')
const PostModel = require('../PostModels/Posts.js')

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

UserModel.hasMany(Like, {as: 'credentialId', foreignKey: {name: 'credentialId'}})  
PostModel.hasMany(Like, {as: 'postId', foreignKey: {name: 'postId'}})

Like.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Like