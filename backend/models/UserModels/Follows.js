const sequelize = require('sequelize');
const database = require('../database.js');
const userModel = require('../UserModels/Credentials.js')

const Follow = database.define(
  'follow',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    followed: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    },
    follower: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        isInt: true
      }
    }
  },
  {
    timestamps:true
  }
)

Follow.sync()
  .then((data) => {                                                                    
    console.log('Follow model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Follow