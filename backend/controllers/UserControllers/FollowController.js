const model = require("../../models/UserModels/Follows.js")

const generalFollowController = {
  get:(req, res) => {
    console.log('success get')
  },
  post:(req, res) => {
    console.log('success post')
  },
  patch:(req, res) => {
    console.log('success put')
  },
  delete:(req, res) => {
    console.log('success delete')
  }
}

const userFollowController = {
  get:(req, res) => {
    console.log('success get')
  },
}

module.exports = {generalFollowController, userFollowController};