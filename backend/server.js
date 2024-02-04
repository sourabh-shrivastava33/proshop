import express from "express";
import dotenv from "dotenv";
dotenv.config();
import product from "./data/product.js";
import connectDb from "./config/db.js";

import productRouter from "./routes/productsRoute.js";
import { NotFound, errorMiddleWare } from "./middlewares/errorMiddleware.js";
const port = process.env.PORT || 5000;
const app = express();
connectDb();
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.use("/api/products", productRouter);

app.use(NotFound);
app.use(errorMiddleWare);
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
