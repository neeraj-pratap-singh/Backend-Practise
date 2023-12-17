const p1 = require("./prod")


function addProducts(name, price) {
    p1.push({ name: name, price: price });
  }

  function deleteProducts(name) {
    p1 = product.filter((p) => p.name !== name);
  }

  module.exports = {
    addProducts,
    deleteProducts
  }