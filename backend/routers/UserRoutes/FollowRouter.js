const router = require("express").Router()
const controller = require("../../controllers/UserControllers/FollowController.js");

router
  .route('/u/:username')
  .get(controller.userFollowController.get)

router
  .route('/:followed/:following')
  .get(controller.generalFollowController.get)
  .post(controller.generalFollowController.post)
  .patch(controller.generalFollowController.patch)
  .delete(controller.generalFollowController.delete)

module.exports = router;