const router = require("express").Router()
const controller = require("../../controllers/PostControllers/PostController.js");

router
  .route('/')
  .get(controller.multiplePostController.get)
  .post(controller.multiplePostController.post)
  .delete(controller.multiplePostController.delete)
  .patch(controller.multiplePostController.patch)

router
  .route('/:reference_id')
  .get(controller.singlePostController.get)
  .post(controller.singlePostController.post)
  .delete(controller.singlePostController.delete)
  .patch(controller.singlePostController.patch)

module.exports = router;