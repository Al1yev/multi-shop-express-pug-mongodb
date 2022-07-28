const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  name: {
    type: String,
    required: ture,
  },
});
