const mongoose = require("mongoose");

const clothesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  miniDescription: {
    type: String,
    required: [true, "Please enter product miniDescription"],
  },
  type: {
    type: String,
    required: [true, "Please enter product type"],
  },
  size: {
    type: String,
    required: [true, "Please enter product size"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  color: {
    type: String,
    required: [true, "Please enter product color"],
  },
  images: [
    {
      type: String,
      required: [true, "Please enter product images"],
    },
  ],
  delivery: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Clothes = mongoose.model("clothes", clothesSchema);

module.exports = Clothes;
