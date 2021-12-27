const router = require("express").Router()
const controller = require("../../controllers/PostControllers/PostController.js");

router
  .route('/')
  .get(controller.generalPostController.get)
  .post(controller.generalPostController.post)

router
  .route('/p/:post_id')
  .get(controller.postPostController.get)
  .delete(controller.postPostController.delete)
  .patch(controller.postPostController.patch)

router
  .route('/u/:username')
  .get(controller.userPostController.get)
  .patch(controller.userPostController.patch)

module.exports = router;