const Follow = require("../../models/UserModels/Follows.js")

const generalFollowController = {
  get:(req, res) => {
    // let follwed = req.params.followed
    // let following = req.params.following
    let follower = 1
    let followed = 2
    Follow.findOne({
      where: {follower: follower, followed: followed}
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  },
  post:(req, res) => {
    // let follwed = req.params.followed
    // let following = req.params.following
    let follower = 1
    let followed = 2
    Follow.create({
      follower: follower,
      followed: followed
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  },
  patch:(req, res) => {
    console.log('success put')
  },
  delete:(req, res) => {
    let follower = 1
    let followed = 2
    Follow.destroy({
      where: {follower: follower, followed: followed}
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

const userFollowController = {
  get:(req, res) => {
    console.log('success get')
  },
}

module.exports = {generalFollowController, userFollowController};