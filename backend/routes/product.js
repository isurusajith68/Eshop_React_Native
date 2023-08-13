const router = require("express").Router();
const productControllers = require("../controller/productControllers");

router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getOneProduct);
router.get("/search/:key", productControllers.searchProduct);
router.post("/", productControllers.createProduct);

module.exports = router;
