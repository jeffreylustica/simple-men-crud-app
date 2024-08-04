const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/products.route.js");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

app.use("/api/products", productRoute);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch(() => console.log("Connection failed!"));
