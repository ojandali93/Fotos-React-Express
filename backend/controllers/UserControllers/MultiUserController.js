const model = require("../../models/UserModels/Credentials.js")

const controller = {
  get:(req, res) => {
    console.log('success users get')
  },
  post:(req, res) => {
    console.log('success users post')
  },
  put:(req, res) => {
    console.log('success users put')
  },
  delete:(req, res) => {
    console.log('success users delete')
  }
}

module.exports = controller;