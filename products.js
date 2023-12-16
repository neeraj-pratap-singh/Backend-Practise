let product = [
  {
    name: "coke",
    price: 100,
  },
  {
    name: "thums up",
    price: 45,
  },
  {
    name: "fanta",
    price: 1000,
  },
  {
    name: "dew",
    price: 200,
  },
];
function addProducts(name, price) {
  product.push({ name: name, price: price });
}
function display() {
  product.forEach((p) => {
    console.log(`Name: ${p.name}, Price: ${p.price}`);
  });
}
function deleteProducts(name) {
  product = product.filter((p) => p.name !== name);
}
function updateProduct(name, newPrice) {
  product = product.map(p => {
    if (p.name === name) {
      return { ...p, price: newPrice };
    }
    return p;
  });
}
function findMostExpensiveProduct() {
  let maxPriceProduct = product[0];
  product.forEach(p => {
    if (p.price > maxPriceProduct.price) {
      maxPriceProduct = p;
    }
  });
  console.log(`Most Expensive Product: ${maxPriceProduct.name}, Price: ${maxPriceProduct.price}`);
}
function calculateTotalPrice() {
  let totalPrice = product.reduce((sum, p) => sum + p.price, 0);
  console.log(`Total Price of All Products: ${totalPrice}`);
}


// Add a new product
addProducts("Mrinda", 120);

// Display all products
display();

// Delete a product
deleteProducts("coke");

// Display products after deletion
display();

// Updating a product's price
updateProduct("fanta", 110);

// Finding the most expensive product
findMostExpensiveProduct();

// Calculating the total price
calculateTotalPrice();
