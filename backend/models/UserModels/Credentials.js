const sequelize = require('sequelize');
const database = require('../database.js')

const Credential = database.define(
  'credential',
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
        is: ["^[a-z]+$",'_'],
        min: 4,
        max: 22,
      }
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 16
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
        isAlphaNumeric: true,
        isIn: [['tier1', 'tier2', 'tier3']]
      }
    },
    reference_id: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphaNumeric: true,
      }
    },
  },
  {
    timestamps:true
  }
)

Credential.sync()
  .then((data) => {                                                                    
    console.log('Credentials model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Credential