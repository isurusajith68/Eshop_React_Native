const router = require("express").Router();
const UserController = require("../controller/userController");

router.delete("/:id", UserController.deleteUser);
router.get("/:id", UserController.getuser);
router.put("/:id", UserController.updateuser);

module.exports = router;
