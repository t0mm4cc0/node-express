const products = require("./products.json");

const db = {
    getAllProducts: () => products, 
    getProductById: (id) => products.find((product) => id == product.id)
};

module.exports = {db};