const express = require("express");
const router = express.Router();
const booksController = require("../controllers/book-controller");

router.use((req, res, next) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  console.log(`Date : ${today.toUTCString()}`);
  next();
});

router.get("/", booksController.getBooks);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.post("/", booksController.postBook);
router.delete("/:id", booksController.deletePost);
module.exports = router;
