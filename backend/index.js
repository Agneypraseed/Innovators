const express = require("express");
const app = express();
const port = 4000;
const routes = require("./routes/api");
const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://admin:admin@cluster0.ujqsols.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((res) => console.log("connectd to db"))
  .catch((err) => console.log(err));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
