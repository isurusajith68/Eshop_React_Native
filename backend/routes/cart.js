const router = require("express").Router();
const cartController = require("../controller/cartController");

router.get("/find/:userId", cartController.getCart);
router.post("/add", cartController.addCart);
router.post("/quantity", cartController.decrementCartItem);
router.delete("/:cartItemId", cartController.deleteCartItem);

module.exports = router;
