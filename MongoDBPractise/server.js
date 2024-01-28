const express = require("express");
const mongoose = require("mongoose");

// Create the server
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection
mongoose.connect("mongodb+srv://neeraj:neeraj1421@cluster0learn.muek4hy.mongodb.net/MongoDBPractice")
    .then(() => console.log("Database connected"))
    .catch(error => console.error("Database connection failed:", error));

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number,
});

// Product Model
const Product = mongoose.model("Product", productSchema);

// Function to validate product data
const validateProduct = (product) => {
    if (!product.name || !product.price || !product.category || product.stock == null) {
        return false;
    }
    return true;
};

// POST: Create a new product
app.post("/createProduct", async (req, res) => {
    if (!validateProduct(req.body)) {
        return res.status(400).json({ message: "Invalid product data" });
    }

    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// // GET: Retrieve all products
// app.get("/products", async (req, res) => {
//     try {
//         const products = await Product.find().select({__v:0}).sort("price");
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });
app.get("/products", async (req, res) => {
    try {
        // Build the query object based on provided query parameters
        let query = {};
        if (req.query.id) {
            query._id = req.query.id;  // Filter by product ID
        }
        if (req.query.category) {
            query.category = req.query.category;  // Filter by category
        }

        // Find products based on the query, exclude __v field, and sort by price
        const products = await Product.find(query).select({ __v: 0 }).sort("price");
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET: Search products by name
app.get("/searchProducts", async (req, res) => {
    try {
        const products = await Product.find({ name: { $regex: req.query.name, $options: "i" } });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT: Update a product
app.put("/updateProduct/:id", async (req, res) => {
    if (!validateProduct(req.body)) {
        return res.status(400).json({ message: "Invalid product data" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PATCH: Update product stock
app.patch("/updateStock/:id", async (req, res) => {
    if (req.body.stock == null) {
        return res.status(400).json({ message: "Invalid stock data" });
    }

    try {
        const product = await Product.findById(req.params.id);
        product.stock = req.body.stock;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE: Delete a product
app.delete("/deleteProduct/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
