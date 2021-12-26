const model = require("../../models/UserModels/Follows.js")

const controller = {
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

module.exports = controller;