const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: String,
  review: Number,
  author: String,
  datePublished: Date,
  price: Number,
  genre: String,
});

const Book = mongoose.model("Book", schema);

module.exports = Book;
