const model = require("../../models/PostModels/Comment.js")

const commentCommentController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const generalCommentController = {
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

const userCommentController = {
  get:(req, res) => {
    console.log('success get')
  }
}

module.exports = {commentCommentController, generalCommentController, userCommentController};