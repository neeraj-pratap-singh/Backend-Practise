const p1 = require("./prod")

const {addProducts, deleteProducts} = require("./addProduct")
const {findMostExpensiveProduct, calculateTotalPrice} = require("./priceCalculation")

console.log(p1)
addProducts('limca', 250)
console.log(p1)

calculateTotalPrice()



// function updateProduct(name, newPrice) {
//   product = product.map(p => {
//     if (p.name === name) {
//       return { ...p, price: newPrice };
//     }
//     return p;
//   });
// }



// // Add a new product
// addProducts("Mrinda", 120);

// // Display all products
// display();

// // Delete a product
// deleteProducts("coke");

// // Display products after deletion
// display();

// // Updating a product's price
// updateProduct("fanta", 110);

// // Finding the most expensive product
// findMostExpensiveProduct();

// // Calculating the total price
// calculateTotalPrice();
