import express from "express";
import dotenv from "dotenv";
dotenv.config();
import product from "./data/product.js";
import connectDb from "./config/db.js";
const port = process.env.PORT || 5000;
const app = express();
connectDb();
app.get("/", (req, res) => {
  res.send("Server is running....");
});
app.get("/api/products", (req, res) => {
  res.json(product);
});

app.get("/api/product/:id", (req, res) => {
  const reqProduct = product.find((p) => p._id === req.params.id);
  res.json(reqProduct);
});
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
