
const { db } = require("../services/mock.service");

function getAllProducts(req, res) {
    res.json(db.getAllProducts());
};

function getProductById(req, res) {
    //console.log(Number(req.params.id));
    //console.log(Number(req.params.id) == NaN);
    if (Number(req.params.id)) {
        res.json(db.getProductById(req.params.id));
    } else {
        res.status(400).send("invalid request!");
    }
};

module.exports = { getAllProducts, getProductById };