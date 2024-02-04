import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import products from "./data/product.js";
import users from "./data/users.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();
    console.log("Data deleted");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
