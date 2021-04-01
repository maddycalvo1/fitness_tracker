const PORT = 3000;
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/API.js"));
app.use(require("./routes/HTML.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});