/*
    What is do?
    - build a middleware to connect model with view 
    - get product from model 
    - then render the object to index page 
*/
const productModel = require('../models/products.model')

exports.getHome = (req, res, next) => {

    // use then because getAllProducts is return Promise 
    productModel.getAllProducts().then(products => {
        res.render('index',{
            products: products
        })
    })
}