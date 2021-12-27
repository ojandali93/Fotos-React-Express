const router = require("express").Router()
const controller = require('../../controllers/PostControllers/CommentController.js')

router
  .route('/:post')
  .get(controller.generalCommentController.get)
  .post(controller.generalCommentController.post)
  .patch(controller.generalCommentController.patch)
  .delete(controller.generalCommentController.delete)

router
  .route('/c/:comment')
  .get(controller.commentCommentController.get)

router
  .route('/u/:username')
  .get(controller.userCommentController.get)

module.exports = router;  