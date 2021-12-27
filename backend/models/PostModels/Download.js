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

User.hasMany(Download, {as: 'userId', foreignKey: {name: 'userId'}})
Post.hasMany(Download, {as: 'post', foreignKey: {name: 'post'}})

Download.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Download