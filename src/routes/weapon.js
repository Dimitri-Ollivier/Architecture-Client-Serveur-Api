const { Router } = require('express');
const controller = require('../controllers/weapon');

const router = Router();

router.get("/", controller.getPictures);
router.get("/:id", controller.getPictureById);
router.put("/", controller.addPicture);
router.post("/:id", controller.updatePicture);
router.delete("/:id", controller.deletePicture);

module.exports = router;
