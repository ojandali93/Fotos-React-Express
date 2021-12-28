const router = require("express").Router()
const controller = require('../../controllers/UserControllers/UserController.js')

router
  .route('/')
  .get(controller.generalUserController.get)
  .post(controller.generalUserController.post)

router
  .route('/:username')
  .get(controller.usernameUserController.get)
  .delete(controller.usernameUserController.delete)
  .patch(controller.usernameUserController.patch)

module.exports = router; 