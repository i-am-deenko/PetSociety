const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    species: {
      type: [String],
      enum: ["dog", "cat", "rabbit", "hamster", "bird", "lizard", "fish"],
      required: true,
    },
    color: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL"], // Standard sizing
      required: true,
    },
    durability: {
      type: String,
      enum: ["low", "medium", "high", "indestructible"],
      required: true,
    },
    safe_for_teething: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Toy", ToySchema);
