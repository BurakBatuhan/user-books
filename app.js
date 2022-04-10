const mongoose = require("mongoose");
require("dotenv/config");

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log("not connected" + err);
  });

