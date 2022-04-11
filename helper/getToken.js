const Auth = require("../models/Auth.js");

/**
 *
 * @param {*} email
 * @returns
 */
const getUserId = async (email) => {
  return await Auth.findOne({ email }).select("_id");
};

module.exports = {
  getUserId,
};
