const express = require('express')
const app = express()

var products = [
  {"name": "Product A", "price": 29.99, "category": "Electronics"},
  {"name": "Product B", "price": 49.99, "category": "Books"},
  {"name": "Product C", "price": 9.99, "category": "Groceries"},
  {"name": "Product D", "price": 99.99, "category": "Fashion"},
  {"name": "Product E", "price": 19.99, "category": "Beauty"}
]

app.get('/', function (req, res) {
  res.send('Hello World')
})

// create get API to fetch all product data
app.get('/getAllProducts', function (req, res) {
  res.send(products)
})


// The Port is 3000 where we are listening requests
app.listen(3000,() => {
    console.log("server is started")
})