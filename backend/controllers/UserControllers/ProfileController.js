const Profile = require("../../models/UserModels/Profiles.js")
const User = require('../../models/UserModels/Users.js')

const profileController = {
  get:(req, res) => {
    if(req.session.authenticated){
      Profile.findOne({
        where: {userId: req.session.user.userId}
      })
      .then((data) => {
        res.send(data).status(200)
      })
      .catch((err) => {
        console.error(err)
      })
    }
  },
  post:(req, res) => {
    let body = req.body
    Profile.create({
      f_name: body.f_name,
      l_name: body.l_name,
      bio: body.bio,
      location: body.location,
      sm_facebook: body.sm_facebook,
      sm_instagram: body.sm_instagram,
      sm_twitter: body.sm_twitter,
      sm_website: body.sm_website,
      followers: body.followers,
      following: body.following,
      photos: body.photos,
      downloads: body.downloads,
      edits: body.edits,
      userId: body.userId
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
      res.send(err).status(400)
    })
  },
  patch:(req, res) => {
    if(req.session.authenticated){
      let body = req.body
      Profile.update({
        bio: body.bio,
        location: body.location,
        sm_facebook: body.sm_facebook,
        sm_instagram: body.sm_instagram,
        sm_twitter: body.sm_twitter,
        sm_website: body.sm_website,
        followers: body.followers,
        following: body.following,
        photos: body.photos,
        downloads: body.downloads,
        edits: body.edits,
        userId: req.session.user.userId
      },{where: {userId: req.session.user.userId}})
      .then((data) => {
        res.send(data).status(200)
      })
      .catch((err) => {
        console.error(err)
        res.send(err).status(400)
      })
    }
    
  },
  delete:(req, res) => {
    if(req.session.authenticated){
      Profile.destroy({
        where: {userId: req.session.user.userId}
      })
      .then((data) => {
        res.send(data).status(202)
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }
}

module.exports = profileController;