const handlerController = require("./handlerController");
const Clothes = require("../models/clothesModel");

const getAllClothes = (req, res, next) => {
  return handlerController.getAll(req, res, next, Clothes);
};

const getOneClothes = (req, res, next) => {
  return handlerController.getOne(req, res, next, Clothes);
};

const createClothes = (req, res, next) => {
  return handlerController.add(req, res, next, Clothes);
};

const updateClothes = (req, res, next) => {
  return handlerController.update(req, res, next, Clothes);
};

const deleteClothes = (req, res, next) => {
  return handlerController.deleteData(req, res, next, Clothes);
};

module.exports = {
  getAllClothes,
  getOneClothes,
  createClothes,
  updateClothes,
  deleteClothes,
};
