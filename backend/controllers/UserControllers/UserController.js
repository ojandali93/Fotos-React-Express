const model = require("../../models/UserModels/Users.js")
const bcrypt = require('Bcrypt')

const usernameUserController = {

  get:(req, res) => {
    if(req.session.authenticated){
      model.findOne({
        where: {id: req.session.user.userId}
      })
      .then((data) => {
        res.send(data).status(200)
      })
      .catch((err) => {
        console.error(err)
      })
    }
  },
  patch:(req, res) => {
    if(req.session.authenticated){
      let body = req.body
      model.update(
        {
          username: body.username,
          password: body.password,
          account_type: body.account_type,
          account_status: body.account_status,
          account_tier: body.account_tier,
          reference_id: body.reference_id
        },
        {where: {id: req.session.user.userId}}
      )
      .then((data) => {
        res.send(data).status(200)
      })
      .catch((err) => {
        console.error(err)
      })
    }
  },
  delete:(req, res) => {
    if(req.session.authenticated){
      let username = req.params.username
      model.destroy({
        where: {id: req.session.user.userId}
      })
      .then((data) => {
        res.send(data).status(200)
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }
}

const generalUserController = {
  get:(req, res) => {
    if(req.session.authenticated){
      model.findAll()
      .then((data) => {
        res.send(data).status(200)
      })
      .catch((err) => {
        console.error(err)
      })
    }
  },
  post:(req, res) => {
    let body = req.body 
    console.log(body)
    model.create({
      username: body.username,
      password: body.password,
      account_type: body.account_type,
      account_status: body.account_status,
      account_tier: body.account_tier,
      reference_id: body.reference_id
    })
    .then((data) => {
      req.session.authenticated = true
      req.session.user = {
        username:data.username,
        userId:data.id
      }
      res.send(req.session).status(200)
    })
    .catch((err) => {
      console.error(err)
      res.send(err).status(400)
    })
  }
}

module.exports = {usernameUserController, generalUserController};