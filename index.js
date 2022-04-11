const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");

const authRoute = require("./routes/authRoute.js");
const booksRoute = require("./routes/booksRoute.js");
const verifyToken = require("./middleWares/verifyToken.js");
const app = express();
const PORT = 5001;

/**
 * Connect Database
 */
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server port:${PORT}`));
  })
  .catch((err) => {
    console.log("not connected" + err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRoute);

//middleware
app.use(verifyToken);

app.use(booksRoute);
