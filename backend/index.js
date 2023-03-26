const express = require("express");
const app = express();
const port = 4000;
const routes = require("./routes/api");
const mongoose = require("mongoose");
const User = require("./models/user");

const dbURI =
  "mongodb+srv://admin:admin@cluster0.ujqsols.mongodb.net/Innovators?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((res) =>
    app.listen(port, () => {
      console.log("connected to db");
      console.log(`Server listening at http://localhost:${port}`);
    })
  )
  .catch((err) => console.log(err));

// app.get("/add-user", (req, res) => {
//   const user = new User({
//     username: "test user",
//     total_cashback: 20,
//     green_cashback: 30,
//   });
//   user
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/getUser", (req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/gettotalcashback", (req, res) => {
  User.find()
    .then((result) => {
      res.send({ result: result[0].total_cashback });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/getgreencashback", (req, res) => {
  User.find()
    .then((result) => {
      res.send({ result: result[0].green_cashback });
    })
    .catch((err) => {
      console.log(err);
    });
});
