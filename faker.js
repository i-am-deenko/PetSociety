const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Toy = require("./models/toys");
const Food = require("./models/food");
const Clothing = require("./models/clothes");
const Pet = require("./models/pets");

mongoose
  .connect("mongodb://localhost:27017/petstoreapp")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("Connection Error:", err));

const speciesList = [
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "bird",
  "lizard",
  "fish",
];
const sizes = ["XS", "S", "M", "L", "XL"];
const clothesSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "white",
  "pink",
  "purple",
  "brown",
  "orange",
];
const durabilityLevels = ["low", "medium", "high", "indestructible"];
const foodCategories = [
  "dry",
  "wet",
  "raw",
  "freeze-dried",
  "pellets",
  "treats",
  "supplements",
];
const foodUnits = ["g", "kg", "oz", "lb"];
const clothesTypes = [
  "shirt",
  "sweater",
  "jacket",
  "dress",
  "bandana",
  "hat",
  "shoes",
  "costume",
];
const petBreeds = [
  "Golden Retriever",
  "Siamese Cat",
  "Parrot",
  "Bearded Dragon",
  "Dutch Rabbit",
  "Syrian Hamster",
  "Goldfish",
  "Red-Eared Slider",
  "Corn Snake",
];

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function seedToys() {
  const toys = [];
  for (let i = 0; i < 50; i++) {
    toys.push({
      name: faker.commerce.productName(),
      species: faker.helpers.arrayElements(
        speciesList,
        faker.number.int({ min: 1, max: 3 }),
      ),
      color: randomElement(colors),
      size: randomElement(sizes),
      durability: randomElement(durabilityLevels),
      safe_for_teething: faker.datatype.boolean(),
      price: faker.commerce.price({ min: 5, max: 100, dec: 2 }),
    });
  }
  await Toy.insertMany(toys);
  console.log("Seeded 50 Toys!");
}

async function seedFood() {
  const foods = [];
  for (let i = 0; i < 50; i++) {
    foods.push({
      name: faker.commerce.productName(),
      species: randomElement(speciesList),
      category: randomElement(foodCategories),
      weight: faker.number.int({ min: 100, max: 5000 }),
      unit: randomElement(foodUnits),
      price: faker.commerce.price({ min: 2, max: 50, dec: 2 }),
      images: [faker.image.url(), faker.image.url()],
      description: faker.commerce.productDescription(),
    });
  }
  await Food.insertMany(foods);
  console.log("Seeded 50 Food Items!");
}

async function seedClothes() {
  const clothes = [];
  for (let i = 0; i < 50; i++) {
    clothes.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 10, max: 100, dec: 2 }),
      species: randomElement([
        "dog",
        "cat",
        "rabbit",
        "hamster",
        "lizard",
        "bird",
      ]),
      type: randomElement(clothesTypes),
      size: randomElement(clothesSizes),
      color: randomElement(colors),
    });
  }
  await Clothing.insertMany(clothes);
  console.log("Seeded 50 Clothes!");
}

async function seedPets() {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    pets.push({
      name: faker.person.firstName(),
      age: faker.number.int({ min: 0, max: 15 }),
      species: randomElement(speciesList),
      breed: randomElement(petBreeds),
      weight: faker.number.float({ min: 0.5, max: 50, precision: 0.1 }),
      vaccinated: faker.datatype.boolean(),
    });
  }
  await Pet.insertMany(pets);
  console.log("Seeded 50 Pets!");
}

async function seedDB() {
  await mongoose.connection.dropDatabase();
  console.log("Database cleared!");

  await seedToys();
  await seedFood();
  await seedClothes();
  await seedPets();

  mongoose.connection.close();
  console.log("Seeding complete! Connection closed.");
}

seedDB();
