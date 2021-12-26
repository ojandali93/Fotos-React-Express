const model = require("../../models/UserModels/Credentials.js")

const singleUserController = {
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

const multimpleUserController = {
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

module.exports = {singleUserController, multimpleUserController};