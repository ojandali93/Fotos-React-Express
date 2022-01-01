const Profile = require("../../models/UserModels/Profiles.js")
const User = require('../../models/UserModels/Users.js')

const profileController = {
  get:(req, res) => {
    // update to make sure that the user id is used to search rather than 
    // using the username in the session. 
    // STORE USERID AND USERNAME IN SESSION TO ACCESS
    let username = req.params.username
    let userId = 1
    Profile.findOne({
      where: {userId: userId}
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  },
  post:(req, res) => {
    let username = req.params.username
    let userId = 1
    let body = req.body
    Profile.create({
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
      userId: userId
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
    let username = req.params.username
    let userId = 1
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
      userId: userId
    },{where: {userId: userId}})
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
      res.send(err).status(400)
    })
  },
  delete:(req, res) => {
    let username = req.params.username
    let userId = 1
    Profile.destroy({
      where: {userId: userId}
    })
    .then((data) => {
      res.send(data).status(202)
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

module.exports = profileController;