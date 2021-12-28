const model = require("../../models/UserModels/Users.js")

const usernameUserController = {
  get:(req, res) => {
    let username = req.params.username
    model.findOne({
      where: {username: username}
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  },
  patch:(req, res) => {
    let body = req.body
    let username = req.params.username
    model.update(
      {
        username: body.username,
        password: body.password,
        account_type: body.account_type,
        account_status: body.account_status,
        account_tier: body.account_tier,
        reference_id: body.reference_id
      },
      {where: {username: username}}
    )
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  },
  delete:(req, res) => {
    let username = req.params.username
    model.destroy({
      where: {username: username}
    })
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

const generalUserController = {
  get:(req, res) => {
    model.findAll()
    .then((data) => {
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
    })
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
      res.send(data).status(200)
    })
    .catch((err) => {
      console.error(err)
      res.send(err).status(400)
    })
  }
}

module.exports = {usernameUserController, generalUserController};