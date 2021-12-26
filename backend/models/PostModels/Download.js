const sequelize = require('sequelize');
const database = require('../database.js')
const userModel = require('../UserModels/Credentials.js')
const postModel = require('../PostModels/Posts.js')

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

userModel.hasMany(Download)
postModel.hasMany(Download)

Download.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Download