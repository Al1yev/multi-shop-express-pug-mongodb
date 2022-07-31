const handlerController = require("./handlerController");
const User = require("../models/userModel");

const getAllUsers = (req, res, next) => {
  return handlerController.getAll(req, res, next, User);
};

const getOneUser = (req, res, next) => {
  return handlerController.getOne(req, res, next, User);
};

const createUser = (req, res, next) => {
  return handlerController.add(req, res, next, User);
};

const updateUser = (req, res, next) => {
  return handlerController.update(req, res, next, User);
};

const deleteUser = (req, res, next) => {
  return handlerController.deleteData(req, res, next, User);
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
