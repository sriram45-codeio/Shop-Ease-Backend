# 🧩 ShopEase - Backend (Node.js + Express + MongoDB)

The **ShopEase backend** is built using **Node.js**, **Express.js**, and **MongoDB (Atlas)**.  
It provides REST APIs for product listing, product details, and basic cart management.  
This backend powers the ShopEase React frontend by serving live data through secure endpoints.

---

## 🚀 Live Backend API
**Render Deployment:** [https://shop-ease-backend-m297.onrender.com](https://shop-ease-backend-m297.onrender.com)

**Example Endpoints:**
- `GET /products` → Fetch all products  
- `GET /products/:id` → Fetch single product by ID  
- `POST /cart` → Add an item to the cart  
- `GET /cart` → View all cart items  
- `DELETE /cart` → Clear the cart

---

## 🌟 Features
- RESTful API built with Express.js  
- Connected to MongoDB Atlas using Mongoose  
- Handles product fetching and single product retrieval  
- In-memory cart system for demonstration  
- Error handling for invalid routes and server issues  
- Uses dotenv for environment variable protection  

---

## 🧠 Tech Stack
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- Dotenv  
- CORS  

---

## 📁 Folder Explanation
- **server.mjs** – Main entry file that runs the Express server and connects to MongoDB  
- **schema.mjs** – Defines the Mongoose product schema for MongoDB collection  
- **importData.mjs** – Script to import data from a local JSON file into MongoDB  
- **Products.json** – Sample product data used for initial database population  
- **.env** – Stores sensitive database credentials (excluded from GitHub)  
- **.gitignore** – Prevents `.env` and `node_modules` from being uploaded to GitHub  
- **package.json** – Contains all dependencies and project info  

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/sriram45-codeio/Shop-Ease-Backend.git

# Navigate into the project folder
cd Shop-Ease-Backend

# Install dependencies
npm install
