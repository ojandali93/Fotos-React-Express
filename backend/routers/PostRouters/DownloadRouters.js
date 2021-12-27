const router = require("express").Router()
const controller = require('../../controllers/PostControllers/DownloadController.js')

router
  .route('/')
  .get(controller.generalDownloadController.get)

router
  .route('/:post/:userId')
  .get(controller.userPostDownloadController.get)
  .post(controller.userPostDownloadController.post)
  .patch(controller.userPostDownloadController.patch)
  .delete(controller.userPostDownloadController.delete)

router
  .route('/p/:post')
  .get(controller.postPostDownloadController.get)

router
  .route('/u/:username')
  .get(controller.postUserDownloadController.get)

module.exports = router; 