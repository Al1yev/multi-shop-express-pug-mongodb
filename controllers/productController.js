const handlerController = require("./handlerController");
const Product = require("../models/productModel");

const getAllProducts = (req, res, next) => {
  return handlerController.getAll(req, res, next, Product);
};

const getOneProduct = (req, res, next) => {
  return handlerController.getOne(req, res, next, Product);
};

const createProduct = (req, res, next) => {
  console.log(req.body);
  return handlerController.add(req, res, next, Product);
};

const updateProduct = (req, res, next) => {
  return handlerController.update(req, res, next, Product);
};

const deleteProduct = (req, res, next) => {
  return handlerController.deleteData(req, res, next, Product);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
