const AppError = require("./AppError");

const CatchErrorAsync = (funksiya) => {
  const catchFunc = (req, res, next, Model, option) => {
    funksiya(req, res, next, Model, option).catch((err) => {
      next(new AppError(err.message, 404));
    });
  };
  return catchFunc;
};

module.exports = CatchErrorAsync;
