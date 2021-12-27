const router = require("express").Router()
const controller = require('../../controllers/PostControllers/LikeController.js')

router
  .route('/')
  .get(controller.generalLikeController.get)

router
  .route('/:post/:userId')
  .get(controller.userPostLikeController.get)
  .post(controller.userPostLikeController.post)
  .patch(controller.userPostLikeController.patch)
  .delete(controller.userPostLikeController.delete)

router
  .route('/p/:post')
  .get(controller.postPostLikeController.get)

router
  .route('/u/:username')
  .get(controller.postUserLikeController.get)

module.exports = router; 