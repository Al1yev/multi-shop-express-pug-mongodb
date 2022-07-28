const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
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

const Product = mongoose.model("products", productSchema);

module.exports = Product;
