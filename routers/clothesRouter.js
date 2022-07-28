const express = require("express");
const router = express.Router();
const clothesController = require("../controllers/clothesController");

router
  .route("/")
  .get(clothesController.getAllClothes)
  .post(clothesController.createClothes);

router
  .route("/:id")
  .get(clothesController.getOneClothes)
  .patch(clothesController.updateClothes)
  .delete(clothesController.deleteClothes);

module.exports = router;
