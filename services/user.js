const { token } = require("../helper/generateToken.js");
const Auth = require("../models/Auth.js");
/**
 *
 * @param {*} username
 * @param {*} password
 * @param {*} email
 */
const createUser = (username, password, email) => {
  const auth = new Auth({
    username,
    password,
    email,
  });
  return auth.save();
};

/**
 *
 * @returns
 */
const loginOperaiton = async (username, password, res) => {
  const isValid = await Auth.findOne({ username, password });

  if (isValid) {
    const payLoad = {
      username: isValid.username,
      password: isValid.password,
      email: isValid.email,
    };
    return await token(payLoad, res);
  } else
    return res
      .status(400)
      .json({ status: 400, message: "Username or password invalid" });
};

/**
 *
 */
const pickFavorite = async () => {};

module.exports = {
  createUser,
  loginOperaiton,
};
