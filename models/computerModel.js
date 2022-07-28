const mongoose = require("mongoose");

const computerSchema = mongoose.Schema({
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
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  color: {
    type: String,
    required: [true, "Please enter product color"],
  },
  brand: {
    type: String,
    required: false,
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

const Computers = mongoose.model("computers", computerSchema);

module.exports = Computers;
