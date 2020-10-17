/*
    This model is work as Following 
    - connect to DB
    - get All products 
    - disconnect to DB 
*/
const { reject } = require('async')
const mongoose = require('mongoose')
const { resolve } = require('path')
const DB_URL = 'mongodb://localhost:27017/online-shop'

// this is what my document is contain 
const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
});



// here we use the collection name in model (in single case without 's')
const Product = mongoose.model("product", productSchema);


exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                return Product.find({});
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};

exports.getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => {
                return Product.find({category: category});
            })
            .then(products => {
                mongoose.disconnect();
                resolve(products);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};