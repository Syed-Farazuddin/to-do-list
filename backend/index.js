const express = require("express");
const cors = require("cors");
require("./db");
const app = express();
const ListModel = require("./model/ListModel");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/fetch-list-items", (req, res) => {
  let list = ListModel.find()
    .then((result) => {
      res.json({ message: "Successfully fetched data", result });
    })
    .catch((e) => {
      console.log(e);
    });
});
app.post("/post", (req, res) => {
  ListModel.create(req.body)
    .then(() => {
      console.log("Added into database");
    })
    .catch((e) => {
      console.log(e);
    });
});
app.delete("/delete/:id", (req, res) => {
  ListModel.findByIdAndDelete(req.params.id)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => console.log(e));
});
app.listen(5000, () => {
  console.log("Server started on 5k");
});
