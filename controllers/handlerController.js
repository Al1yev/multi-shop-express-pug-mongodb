const CatchErrorAsync = require("../utility/CatchErrorAsync.js");
const AppError = require("../utility/AppError");

const resFunc = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "Success",
      results: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "Success",
      data: data,
    });
  }
};

const getAll = CatchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.find();
  if (!data) return next(new AppError("DB is an empty"), 404);
  resFunc(res, 200, data);
});

const getOne = CatchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.findById(req.params.id);
  if (!data) return next(new AppError("Data isn't Found"), 404);
  resFunc(res, 200, data);
});

const add = CatchErrorAsync(async (req, res, next, Model) => {
  // console.log(req.body);
  const data = await Model.create(req.body);
  if (!data) return next(new AppError("Data isn't Created"), 404);
  resFunc(res, 201, data);
});

const update = CatchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body);
  if (!data) return next(new AppError("Data isn't Found"), 404);
  resFunc(res, 202, data);
});

const deleteData = CatchErrorAsync(async (req, res, next, Model) => {
  const data = await Model.finByIdAndDelete(req.params.id);
  if (!data) return next(new AppError("Data isn't Found"), 404);
  resFunc(res, 204, data);
});

module.exports = { getAll, getOne, add, getOne, update, deleteData };
