const sequelize = require('sequelize');
const database = require('../database.js');
// const sequelize_file = reqiure('sequelize-file');

// const profile_picture = sequelize_file({
//   attribute: 'profile_picture',
//   mimetype: /^image/,
//   crop: true,
//   sizes: {
//     small: 64, 
//     big: 128, 
//     large: 256,
//     x_large: 512
//   }
// });

const Profile = database.define(
  'profile',
  {
    id: {
      type: sequelize.INTEGER, 
      autoIncrement: true, 
      primaryKey: true,
    },
    bio: {
      type: sequelize.STRING,
      allowNull: true,
      validation: {
        max:200
      }
    },
    location: {
      type: sequelize.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
        max: 36
      }
    },
    sm_facebook: {
      type: sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    },
    sm_instagram: {
      type: sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    },
    sm_twitter: {
      type: sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    },
    sm_website: {
      type: sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      }
    },
    followers: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isInt: true,
      }
    },
    following: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isInt: true,
      }
    },
    photos: {
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
    }
  },
  {
    timestamps:true
  }
) 

// profile_picture.addTo(Profile);

Profile.sync()
  .then((data) => {
    console.log('Profile model has been synced')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = Profile