const sequelize = require('sequelize');
const database = require('../database.js')
const User = require('../UserModels/Users.js')

const Post = database.define(
  'post',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    location: {
      type: sequelize.STRING,
      allowNull: true,
      validate: {
        isAlphanumeric: true,
      }
    },
    is_original: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      default: 0,
    },
    is_edit: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      default: 0,
    },
    likes: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isInt: true,
      }
    },
    downloads: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isInt: true,
      }
    },
    edits: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isInt: true,
      }
    },
    comments: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isInt: true,
      }
    }
  },
  {
    timestamp: true
  }
)

User.hasMany(Post)

Post.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Post