const handlerController = require("./handlerController");
const Computer = require("../models/ComputerModel");

const getAllComputer = (req, res, next) => {
  return handlerController.getAll(req, res, next, Computer);
};

const getOneComputer = (req, res, next) => {
  return handlerController.getOne(req, res, next, Computer);
};

const createComputer = (req, res, next) => {
  return handlerController.add(req, res, next, Computer);
};

const updateComputer = (req, res, next) => {
  return handlerController.update(req, res, next, Computer);
};

const deleteComputer = (req, res, next) => {
  return handlerController.deleteData(req, res, next, Computer);
};

module.exports = {
  getAllComputer,
  getOneComputer,
  createComputer,
  updateComputer,
  deleteComputer,
};
