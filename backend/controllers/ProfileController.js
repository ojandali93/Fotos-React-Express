const model = require("../models/UserModels/Profiles.js")

const controller = {
  get:(req, res) => {
    console.log('success get')
  },
  post:(req, res) => {
    console.log('success post')
  },
  put:(req, res) => {
    console.log('success put')
  },
  delete:(req, res) => {
    console.log('success delete')
  }
}

module.exports = controller;