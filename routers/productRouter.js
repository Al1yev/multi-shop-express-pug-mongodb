const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const clothesRouter = require("./clothesRouter");

router.use("/clothes", clothesRouter);

// router
//   .route("/")
//   .get(productController.getAllProducts)
//   .post(productController.createProduct);

// router
//   .route("/:id")
//   .get(productController.getOneProduct)
//   .patch(productController.updateProduct)
//   .delete(productController.deleteProduct);

module.exports = router;
