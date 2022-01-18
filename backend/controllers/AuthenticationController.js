const User = require("../models/UserModels/Users.js")

const loginController = {
  post:(req, res) => {
    console.log(req.sessionID)
    const { username, password } = req.body
    if(username && password){
      if(req.session.authenticated){
        res.send(req.session).status(200)
      } else {
        req.session.authenticated = true
        User.findOne({where:{username:username}})
        .then((data) => {
          console.log('user found')
          if(password === data.password){
            req.session.user = {
              username:data.username,
              userId:data.id
            }
            console.log(req.session)
            res.status(201).send(data)
          } else {
            console.log('user not found')
            res.status(403)
          }
        })
        .catch((err) => {
          console.log('user not found')
          res.status(403)
        })
      }
    }res.status(403)
  }
}

const logoutController = {
  post:(req, res) => {
    console.log(req.sessionID)
    if(req.session.authenticated){
      if(req.session.user.username === req.body.username){
        console.log(req.session)
        req.session.destroy()
        res.send("User Logged Out").status(201)
      }
    } else {
      res.send("Not Logged In").status(400)
    }
  },
}

module.exports = {loginController, logoutController};