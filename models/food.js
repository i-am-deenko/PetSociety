const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    species: {
      type: String,
      enum: [
        "dog",
        "cat",
        "bird",
        "rabbit",
        "hamster",
        "fish",
        "lizard",
        "turtle",
        "snake",
      ],
      required: true,
    },
    category: {
      type: String,
      enum: [
        "dry",
        "wet",
        "raw",
        "freeze-dried",
        "pellets",
        "treats",
        "supplements",
      ],
      required: true,
    },
    weight: {
      type: Number,
      required: true,
      min: 0, // No negative weights
    },
    unit: {
      type: String,
      enum: ["g", "kg", "oz", "lb"], // Supports multiple measurement units
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String], // Array of image URLs
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Food", FoodSchema);
