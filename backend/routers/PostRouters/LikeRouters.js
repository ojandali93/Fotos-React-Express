const router = require("express").Router()
const controller = require('../../controllers/PostControllers/LikeController.js')

router
  .route('/:post/:username')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete)
  .patch(controller.patch)

module.exports = router;