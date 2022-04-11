const jwt = require("jsonwebtoken");

const token = async (payLoad, response) => {
  const generateToken = await jwt.sign(payLoad, "asd", {
    expiresIn: 300,
  });
  response.json({
    status: true,
    token: generateToken,
  });
};

module.exports = {
  token,
};
