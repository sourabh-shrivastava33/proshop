import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";

import productRouter from "./routes/productsRoute.js";
import userRouter from "./routes/usersRoute.js";
import { NotFound, errorMiddleWare } from "./middlewares/errorMiddleware.js";
const port = process.env.PORT || 5000;
const app = express();
connectDb();
app.get("/", (req, res) => {
  res.send("Server is running....");
});

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.use(NotFound);
app.use(errorMiddleWare);
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
