const Books = require("../models/Books");

/**
 *
 * @param {*} bookName
 */
const createBook = async (bookName, creator, res) => {
  try {
    const book = new Books({
      name: bookName,
      creator,
    });
    await book.save();
    return res.send({ message: "Book Created" });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error });
  }
};

/**
 *
 * @param {*} res
 * @returns
 */
const booksOfList = async (res) => {
  try {
    const data = await Books.find().populate("auths");
    console.log("asdas", data);
    return res.send({ data: data });
  } catch (error) {
    return res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = {
  createBook,
  booksOfList,
};
