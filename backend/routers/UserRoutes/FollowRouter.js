const router = require("express").Router()
const ProfileController = require("../../controllers/UserControllers/FollowController.js");

router
  .route('/:username')
  .get(ProfileController.get)

router
  .route('/:followed/:following')
  .post(ProfileController.post)
  .patch(ProfileController.patch)
  .delete(ProfileController.delete)

module.exports = router;