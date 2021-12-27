const model = require("../../models/PostModels/Download.js")

const generalDownloadController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const userPostDownloadController = {
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

const postPostDownloadController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const postUserDownloadController = {
  get:(req, res) => {
    console.log('success get')
  }
}

module.exports = {generalDownloadController, userPostDownloadController, postPostDownloadController, postUserDownloadController};