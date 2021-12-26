const router = require("express").Router()
const controller = require('../../controllers/UserControllers/UserController.js')

router
  .route('/')
  .get(controller.multimpleUserController.get)
  .post(controller.multimpleUserController.post)
  .delete(controller.multimpleUserController.delete)
  .patch(controller.multimpleUserController.patch)

router
  .route('/:username')
  .get(controller.singleUserController.get)
  .post(controller.singleUserController.post)
  .delete(controller.singleUserController.delete)
  .patch(controller.singleUserController.patch)

module.exports = router;