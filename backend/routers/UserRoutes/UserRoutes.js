const router = require("express").Router()
const UsersController = require("../../controllers/UsersController.js");
const UserController = require("../../controllers/UserController.js");

router
  .route('/')
  .get(UsersController.get)
  .post(UsersController.post)
  .delete(UsersController.delete)
  .put(UsersController.put)

router
  .route('/:username')
  .get(UserController.get)
  .post(UserController.post)
  .delete(UserController.delete)
  .patch(UserController.patch)

module.exports = router;