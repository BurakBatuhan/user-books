const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  const token =
    request.headers["x-access-token"] ||
    request.body.token ||
    request.query.token;
  if (!token)
    response.status(403).json({ status: 403, message: "Unauthroized" });
  else {
    jwt.verify(token, "asd", (error, decoded) => {
      if (error) response.status(400).json({ status: 400, message: error });
      else {
        request.decode = decoded;
        next();
      }
    });
  }
};
