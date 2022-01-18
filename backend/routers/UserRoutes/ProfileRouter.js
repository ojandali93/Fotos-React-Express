const router = require("express").Router()
const profileController = require("../../controllers/UserControllers/ProfileController.js");

router
  .route('/')
  .get(profileController.get)
  .post(profileController.post)
  .delete(profileController.delete)
  .patch(profileController.patch)

module.exports = router;