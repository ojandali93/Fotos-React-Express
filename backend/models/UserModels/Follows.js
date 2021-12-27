const sequelize = require('sequelize');
const database = require('../database.js');
const User = require('./Users.js')

const Follow = database.define(
  'follow',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    timestamps:true
  }
)

User.hasMany(Follow, {as: 'followed', foreignKey: {name: 'followed'}})
User.hasMany(Follow, {as: 'follower', foreignKey: {name: 'follower'}})

Follow.sync()
  .then((data) => {                                                                    
    console.log('Follow model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Follow