const sequelize = require('sequelize');
const database = require('../database.js')
const sequelize_file = requre('sequelize-file');

const post_picture = sequelize_file({
  attribute: 'post_picture',
  mimetype: /^image/,
  crop: true,
  sizes: {
    small: 512, 
    big: 1080, 
    large: 1440,
    x_large: 1920
  }
});

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
    createdAt: sequelize.DATE,
    updatedAt: sequelize.DATE
  }
)

post_picture.addTo(Post);

Post.sync()
  .then((data) => {                                                                    
    console.log('Posts model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Post