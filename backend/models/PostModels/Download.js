const sequelize = require('sequelize');
const database = require('../database.js')
const User = require('../UserModels/Users.js')
const Post = require('../PostModels/Posts.js')

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
    timestamp: true
  }
)

User.hasMany(Download, {as: 'user_id', foreignKey: {name: 'user_id'}})
Post.hasMany(Download, {as: 'post_id', foreignKey: {name: 'post_id'}})

Download.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Download