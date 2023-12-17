const p1 = require("./prod")


function findMostExpensiveProduct() {
  let maxPriceProduct = p1[0];
  product.forEach(p => {
    if (p.price > maxPriceProduct.price) {
      maxPriceProduct = p;
    }
  });
  console.log(`Most Expensive Product: ${maxPriceProduct.name}, Price: ${maxPriceProduct.price}`);
}
function calculateTotalPrice() {
  let totalPrice = p1.reduce((sum, p) => sum + p.price, 0);
  console.log(`Total Price of All Products: ${totalPrice}`);
}

module.exports = {
    findMostExpensiveProduct,
    calculateTotalPrice
}