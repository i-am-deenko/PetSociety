const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const morgan = require("morgan");
const methodOverride = require("method-override");

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

// Sample route
app.get("/", (req, res) => {
  res.render("index");
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
