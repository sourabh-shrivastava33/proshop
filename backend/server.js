import express from "express";
import product from "./data/product.js";
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is running....");
});
app.get("/api/product", (req, res) => {
  res.json(product);
});

app.get("/api/product/:id", (req, res) => {
  const reqProduct = product.find((p) => p._id === req.params.id);
  res.json(reqProduct);
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
