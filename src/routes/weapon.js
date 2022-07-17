const { Router } = require('express');
const controller = require('../controllers/weapon');

const router = Router();

router.get("/weapons", controller.getWeapons);
router.get("/weapons/:id", controller.getWeaponById);
router.put("/weapons", controller.addWeapon);
router.post("/weapons/:id", controller.updateWeapon);
router.delete("/weapons/:id", controller.deleteWeapon);

module.exports = router;
