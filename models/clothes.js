const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClothesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  species: {
    type: String,
    enum: ["dog", "cat", "rabbit", "hamster", "lizard", "bird"],
    required: true,
  },
  type: {
    type: String,
    enum: [
      "shirt",
      "sweater",
      "jacket",
      "dress",
      "bandana",
      "hat",
      "shoes",
      "costume",
    ],
    required: true,
  },
  size: {
    type: String,
    enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Clothing", ClothesSchema);
