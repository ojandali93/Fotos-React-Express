const model = require("../../models/UserModels/Credentials.js")

const controller = {
  get:(req, res) => {
    console.log('success user get')
  },
  post:(req, res) => {
    console.log('success user post')
  },
  patch:(req, res) => {
    console.log('success user put')
  },
  delete:(req, res) => {
    console.log('success user delete')
  }
}

module.exports = controller;