const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});
app.use("/", (req, res, next) => {
  console.log("in the middleware");
  res.send("<h1>hello from express</h1>");
  next();
});
app.use("/add-product", (req, res, next) => {
  console.log("in the middleware");
  res.send("<h1>Add Products</h1>");
});

app.listen(3000);
