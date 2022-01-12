const router = require("express").Router()
const controller = require('../controllers/AuthenticationController.js')

router
  .route('/login')
  .post(controller.loginController.post)

router
  .route('/logout')
  .post(controller.logoutController.post)

module.exports = router; 