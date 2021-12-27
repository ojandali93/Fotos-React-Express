const model = require("../../models/PostModels/Edits.js")

const generalEditController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const oeEditController = {
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

const originalEditController = {
  get:(req, res) => {
    console.log('success get')
  }
}

const editEditController = {
  get:(req, res) => {
    console.log('success get')
  }
}

module.exports = {generalEditController, oeEditController, originalEditController, editEditController};