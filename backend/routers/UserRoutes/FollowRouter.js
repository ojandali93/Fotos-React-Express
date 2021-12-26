const router = require("express").Router()
const controller = require("../../controllers/UserControllers/FollowController.js");

router
  .route('/:username')
  .get(controller.followController.get)

router
  .route('/:followed/:following')
  .get(controller.userController.get)
  .post(controller.userController.post)
  .patch(controller.userController.patch)
  .delete(controller.userController.delete)

module.exports = router;