const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books.js");

router.post("/createBook", booksController.generateBook);
router.get("/booksList", booksController.booksList);

module.exports = router;
