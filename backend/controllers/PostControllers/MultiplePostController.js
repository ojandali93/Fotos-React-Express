const model = require("../../models/PostModels/Posts.js")

const controller = {
  get:(req, res) => {
    console.log('success users get')
  },
  post:(req, res) => {
    console.log('success users post')
  },
  patch:(req, res) => {
    console.log('success users put')
  },
  delete:(req, res) => {
    console.log('success users delete')
  }
}

module.exports = controller;