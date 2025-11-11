import mongoose from "mongoose";
import Product from "./schema.mjs";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

async function importData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    const fileData = JSON.parse(fs.readFileSync("./Backup_Products/Products.json", "utf-8"));
    const products = fileData.products;

    await Product.deleteMany({});
    console.log("Old products cleared");

    await Product.insertMany(products);
    console.log("Products imported successfully");
  } catch (err) {
    console.log("Import error:", err);
  } finally {
    mongoose.connection.close();
  }
}

importData();
