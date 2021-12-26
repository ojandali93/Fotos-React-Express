const router = require("express").Router()
const ProfileController = require("../../controllers/UserControllers/ProfileController.js");

// router
//   .route('/profile')
//   .get(UsersController.get)

router
  .route('/:username')
  .get(ProfileController.get)
  .post(ProfileController.post)
  .delete(ProfileController.delete)
  .patch(ProfileController.patch)

module.exports = router;