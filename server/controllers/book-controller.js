const Book = require("../model/Book");

const getBooks = async (req, res) => {
  try {
    console.log("Retrieving all the books.");
    const books = await Book.find();
    console.log("Recieved all the books.");
    res.status(201).json({ message: "Full database.", books });
  } catch (err) {
    console.log(err);
  }
};

const postBook = async (req, res) => {
  const { name, review, author, date, price, genre } = req.body;
  let book;
  try {
    book = new Book({ name, review, author, date, price, genre });
    await book.save();
    console.log("Book saved.");
  } catch (err) {
    console.log(err);
  }

  if (!book) return res.status(500).json({ message: "Unable to insert book." });

  return res.status(201).json({ message: "Inserted book successfully.", book });
};

const getById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) return res.status(500).json({ message: "Unable to find book." });

  return res.status(201).json({ message: "Found book successfully.", book });
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  let book;
  const { name, review, author, date, price, genre } = req.body;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      review,
      author,
      date,
      price,
      genre,
    });
  } catch (err) {
    console.log(err);
  }
  if (!book) return res.status(404).json({ message: "Unable to find book." });

  return res
    .status(201)
    .json({ message: "Found book and updated successfully.", book });
};

const deletePost = async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await Book.findByIdAndDelete(id);
    console.log("Post is deleted.");
  } catch (err) {
    console.log(err);
  }

  if (!book) return res.status(404).json({ message: "Unable to find book." });

  return res
    .status(201)
    .json({ message: "Found book and deleted successfully.", book });
};

exports.deletePost = deletePost;
exports.getBooks = getBooks;
exports.postBook = postBook;
exports.getById = getById;
exports.updateBook = updateBook;
