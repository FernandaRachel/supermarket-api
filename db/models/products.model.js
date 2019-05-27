var mongoose = require('mongoose')

console.log('Schema Products called !');

var ProductsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    sellPrice: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
    discount: { type: Number, required: true },
    thumbPath: { type: String, required: true },
    group: { type: Object, required: true }
});

var Products = mongoose.model('supermarket_products', ProductsSchema);


module.exports = Products;