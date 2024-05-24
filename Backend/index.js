require("dotenv").config();

const mongoose = require("mongoose");
const config = require("./database/configDB");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const routes = require("./routes");
app.use(routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection mongoDB Ok");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
