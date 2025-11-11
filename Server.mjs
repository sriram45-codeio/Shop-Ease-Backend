import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./schema.mjs";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected Successfully"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err.message));


// ✅ Declare cart only once
let cart = [];

// 🏁 Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ShopEase Backend Connected to MongoDB ✅"
  });
});

// 📦 Get all products (from DB)
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch from MongoDB
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "❌ Error fetching products from DB",
      error: err.message
    });
  }
});

// 📦 Get single product by ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "❌ Error fetching product",
      error: err.message
    });
  }
});

// 🛒 Cart Routes
app.post("/cart", (req, res) => {
  const item = req.body;
  const exist = cart.find((p) => p.id === item.id);
  if (exist) exist.quantity += 1;
  else cart.push({ ...item, quantity: 1 });

  res.status(201).json({
    success: true,
    message: "Item added to cart",
    data: cart
  });
});

app.get("/cart", (req, res) => {
  res.status(200).json({
    success: true,
    count: cart.length,
    data: cart
  });
});

app.delete("/cart", (req, res) => {
  cart = [];
  res.status(200).json({
    success: true,
    message: "Payment successful — cart cleared"
  });
});

// 🚫 Invalid route handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(8000, () => {
  console.log("🚀 Server running on port 8000");
});
