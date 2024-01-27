////setting up the express server
express = require("express");
mongoose = require('mongoose')

//create the server
app = express();

mongoose
  .connect(
    "mongodb+srv://neeraj:neeraj1421@cluster0learn.muek4hy.mongodb.net/MongoDBPractice"
  )
  .then(() => {
    console.log("The database connection is successfully established ");
  })
  .catch((error) => {
    console.log(" The error is ", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Product Schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number,
  });

//schema method, it takes the schema object,
//the object has key value pairs.
//where the keys are the name of the field and the values are the typeof the field.
//create the Model.
const productModel = mongoose.model("Product", productSchema);
console.log('Model is created')

app.post("/createProduct", async (req,res) => {
    product = new productModel({
        name: "Pepsi",
        price: 20,
        category: "Soft Drink",
        stock: 5
    });
    productResult = await product.save()
    console.log('Data is saved', productResult)
    res.send("data saved to DB")
})

//always at the end of the code
app.listen(3000, () => {
  console.log("The server is listening to port 3000");
});