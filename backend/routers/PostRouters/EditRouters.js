const router = require("express").Router()
const controller = require('../../controllers/PostControllers/EditController.js')

router
  .route('/')
  .get(controller.generalEditController.get)

router
  .route('/:original/:edit')
  .get(controller.oeEditController.get)
  .post(controller.oeEditController.post)
  .delete(controller.oeEditController.delete)
  .patch(controller.oeEditController.patch)

router
  .route('/o/:original')
  .get(controller.originalEditController.get)
 
router
  .route('/e/:edit')
  .get(controller.editEditController.get)

module.exports = router; 