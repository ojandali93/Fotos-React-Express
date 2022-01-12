const User = require("../models/UserModels/Users.js")

const loginController = {
  post:(req, res) => {
    console.log(req.sessionID)
    const { username, password } = req.body
    if(username && password){
      if(req.session.authenticated){
        res.send(req.session).status(200)
      } else {
        if(password === 'dfs78s78df7d'){
          req.session.authenticated = true
          User.findOne({where:{username:username}})
          .then((data) => {
            req.session.user = {
              username:data.username,
              userId:data.id
            }
            res.send(req.session).status(200)
          })
          .catch((err) => {
            res.status(403)
          })
        }
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