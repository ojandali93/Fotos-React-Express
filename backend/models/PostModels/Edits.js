const sequelize = require('sequelize');
const database = require('../database.js')
const Post = require('../PostModels/Posts')

const Edit = database.define(
  'edit',
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

Post.hasMany(Edit, {as: 'original', foreignKey: {name: 'original'}})
Post.hasMany(Edit, {as: 'edit', foreignKey: {name: 'edit'}})

Edit.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Edit