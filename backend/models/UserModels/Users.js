const sequelize = require('sequelize');
const database = require('../database.js')

const User = database.define(
  'user',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        min: 4,
        max: 22,
      }
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 36
      }
    },
    email: {
      type: sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    account_type: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        isIn: [['P', 'E', 'D', 'O']]
      }
    },
    account_status: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        isIn: [['Active', 'Deactivated']]
      }
    },
    account_tier: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
        isIn: [['tier1', 'tier2', 'tier3']]
      }
    },
    reference_id: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
  },
  {
    timestamps:true
  }
)

User.sync()
  .then((data) => {                                                                    
    console.log('Credentials model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = User