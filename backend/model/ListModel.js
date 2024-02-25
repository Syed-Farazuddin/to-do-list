const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const listSchema = mongoose.Schema({
  title: { type: String, required, unique: true },
  description: { type: String, required, unique: true },
});

const ListModel = mongoose.model("ListSchema", listSchema);

module.exports = ListModel;
