const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const AppError = require("../utility/AppError");
const CatchErrorAsync = require("../utility/CatchErrorAsync");

function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

const compareHashPassword = async (password, hashPassword) => {
  const output = await bcrypt.compare(password, hashPassword);
  return output;
};

const signUp = CatchErrorAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangeData: req.body.passwordChangeData || null,
    photo: req.body.photo,
    role: req.body.role,
  });
  if (!newUser) {
    return next(new AppError("User isn't created!"));
  }
  const token = await createToken(newUser._id);
  res.status(201).json({
    status: "Success",
    token: token,
    data: newUser,
  });
});

const signIn = CatchErrorAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("Email yoki password kiriting xato!", 401));
  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new AppError("User not found. Please sign in!"));
  if (!(await compareHashPassword(password, user.password)))
    return next(new AppError("Your login or password is incorrect!", 401));
  const token = createToken(user.id);
  res.status(200).json({
    status: "Success",
    token: token,
    message: "Muvaffaqiyatli otdingiz",
  });
});



module.exports = { signUp, signIn };
