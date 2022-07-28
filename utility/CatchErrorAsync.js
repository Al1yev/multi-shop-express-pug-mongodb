const AppError = require("./AppError");

const CatchErrorAsync = (funksiya) => {
  const catchFunc = (req, res, next) => {
    funksiya(req, res, next).catch((err) => {
      next(new AppError(err.message, 404));
    });
  };
  return catchFunc;
};

module.exports = CatchErrorAsync;
