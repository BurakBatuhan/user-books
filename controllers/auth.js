const Auth = require("../models/Auth.js");
const { createUser, loginOperaiton } = require("../services/user.js");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const register = async (req, res) => {
  const { username, password, email } = req.body;
  const exist = await Auth.findOne({ email });

  if (!exist) {
    await createUser(username, password, email);
    return res.send({ message: "User created" });
  } else
    return res.status(400).json({ status: 400, message: "User Already Exist" });
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).send({
      message: "Email and password can not be empty!",
    });
  }
  return await loginOperaiton(username, password, res);
};

module.exports = {
  register,
  login,
};
