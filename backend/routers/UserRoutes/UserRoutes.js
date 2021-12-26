const router = require("express").Router()
const MultiUserController = require("../../controllers/UserControllers/MultiUserController.js");
const SingleUserController = require("../../controllers/UserControllers/SingleUserController.js");

router
  .route('/')
  .get(MultiUserController.get)
  .post(MultiUserController.post)
  .delete(MultiUserController.delete)
  .put(MultiUserController.put)

router
  .route('/:username')
  .get(SingleUserController.get)
  .post(SingleUserController.post)
  .delete(SingleUserController.delete)
  .patch(SingleUserController.patch)

module.exports = router;