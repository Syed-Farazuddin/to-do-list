const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ToDoList")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(e);
  });
