const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0, // No negative ages
    },
    species: {
      type: String,
      enum: [
        "dog",
        "cat",
        "bird",
        "lizard",
        "rabbit",
        "hamster",
        "fish",
        "turtle",
        "snake",
      ],
      required: true,
    },
    breed: {
      type: String,
      required: true,
      trim: true,
    },
    weight: {
      type: Number,
      min: 0, // No negative weight
    },
    vaccinated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
); // Adds createdAt & updatedAt

module.exports = mongoose.model("Pet", PetSchema);
