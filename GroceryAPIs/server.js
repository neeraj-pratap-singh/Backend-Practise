const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Assuming you have exported the data array from groceryData.js like this:
// module.exports = groceryStoreData;
const groceryStoreData = require('./groceryData.js');

// API to get all products
app.get('/getAllProducts', (req, res) => {
  res.status(200).json(groceryStoreData);
});

// POST API to add a new product
app.post('/addProduct', (req, res) => {
    const newProduct = req.body;
    console.log(newProduct)
    groceryStoreData.push(newProduct);
    res.status(201).send('Product added successfully');
});

app.listen(port, () => {
  console.log(`Grocery store API is running at http://localhost:${port}`);
});
