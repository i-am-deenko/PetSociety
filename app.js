const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const morgan = require("morgan");
const methodOverride = require("method-override");
const Toy = require("./models/toys");
const Food = require("./models/food");
const Pet = require("./models/pets");
const Clothes = require("./models/clothes");
const mongoose = require("mongoose");

// Set EJS as the view engine

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "fonts")));
app.use(
  "/flaticon",
  express.static(__dirname + "/node_modules/@flaticon/flaticon-uicons"),
);

mongoose.connect("mongodb://localhost:27017/petstoreapp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Database connected");
});

// Sample route
app.get("/", async (req, res) => {
  const toy = await Toy.find({});
  const pet = await Pet.find({});
  const food = await Food.find({});
  const clothes = await Clothes.find({});

  res.render("index", { toy, pet, food, clothes });
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
