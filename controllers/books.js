const { createBook, booksOfList } = require("../services/books.js");
const jwt = require("jsonwebtoken");
const { getUserId } = require("../helper/getToken.js");

/**
 * Generate book with userId
 * @param {*} req
 * @param {*} res
 */
const generateBook = async (req, res) => {
  const { bookName } = req.body;
  const token =
    req.headers["x-access-token"] || req.body.token || req.query.token;

  const decoded = jwt.verify(token, "asd");
  const userId = await getUserId(decoded.email);

  return await createBook(bookName, userId._id, res);
};

/**
 * List all books
 * @param {*} req
 * @param {*} res
 */
const booksList = async (req, res) => {
  return await booksOfList(res);
};

module.exports = {
  generateBook,
  booksList,
};
