const router = require("express").Router()
const SingleProfileController = require("../../controllers/PostControllers/SignlePostController.js");
const MultiProfileController = require("../../controllers/PostControllers/MultiplePostController.js");

router
  .route('/')
  .get(MultiProfileController.get)
  .post(MultiProfileController.post)
  .delete(MultiProfileController.delete)
  .patch(MultiProfileController.patch)

module.exports = router;

router
  .route('/:reference_id')
  .get(SingleProfileController.get)
  .post(SingleProfileController.post)
  .delete(SingleProfileController.delete)
  .patch(SingleProfileController.patch)

module.exports = router;