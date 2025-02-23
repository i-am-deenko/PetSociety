const mongoose = require("mongoose");
const Clothing = require("../models/clothes");
const Food = require("../models/food");
const Pet = require("../models/pets");
const Toy = require("../models/toys");

mongoose.connect("mongodb://localhost:27017/petstoreapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Database connected");

  await Clothing.deleteMany({});
  await Food.deleteMany({});
  await Pet.deleteMany({});
  await Toy.deleteMany({});

  const clothes = [
    {
      name: "Fluffy Jacket",
      price: 25,
      species: "dog",
      type: "jacket",
      size: "M",
      color: "red",
    },
    {
      name: "Cozy Bandana",
      price: 10,
      species: "cat",
      type: "bandana",
      size: "S",
      color: "blue",
    },
  ];

  const food = [
    {
      name: "Chicken Kibble",
      species: "dog",
      category: "dry",
      weight: 2,
      unit: "kg",
      price: 20,
    },
    {
      name: "Fish Flakes",
      species: "fish",
      category: "pellets",
      weight: 200,
      unit: "g",
      price: 5,
    },
  ];

  const pets = [
    {
      name: "Buddy",
      age: 2,
      species: "dog",
      breed: "Labrador",
      weight: 30,
      vaccinated: true,
    },
    {
      name: "Whiskers",
      age: 3,
      species: "cat",
      breed: "Siamese",
      weight: 5,
      vaccinated: false,
    },
  ];

  const toys = [
    {
      name: "Rubber Bone",
      species: ["dog"],
      type: "rubber",
      color: "yellow",
      size: "M",
      durability: "high",
      safe_for_teething: true,
      price: 15,
    },
    {
      name: "Feather Wand",
      species: ["cat"],
      type: "fabric",
      color: "multi",
      size: "S",
      durability: "medium",
      safe_for_teething: false,
      price: 8,
    },
  ];

  await Clothing.insertMany(clothes);
  await Food.insertMany(food);
  await Pet.insertMany(pets);
  await Toy.insertMany(toys);

  console.log("Database seeded");
  mongoose.connection.close();
});
