const model = require("../../models/PostModels/Posts.js")

const generalPostController = {
  get:(req, res) => {
    console.log('success users get')
  },
  post:(req, res) => {
    console.log('success users post')
  }
}

const postPostController = {
  get:(req, res) => {
    console.log('success users get')
  },
  patch:(req, res) => {
    console.log('success users put')
  },
  delete:(req, res) => {
    console.log('success users delete')
  }
}

const userPostController = {
  get:(req, res) => {
    console.log('success users get')
  },
  patch:(req, res) => {
    console.log('success users put')
  }
}

module.exports = {generalPostController, postPostController, userPostController};