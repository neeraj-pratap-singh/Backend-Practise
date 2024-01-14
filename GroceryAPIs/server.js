const express = require('express');
const app = express();
const port = 3000;

// Assuming you have exported the data array from groceryData.js like this:
// module.exports = groceryStoreData;
const groceryStoreData = require('./groceryData.js');

app.get('/getAllProducts', (req, res) => {
  res.status(200).json(groceryStoreData);
});

app.listen(port, () => {
  console.log(`Grocery store API is running at http://localhost:${port}`);
});
