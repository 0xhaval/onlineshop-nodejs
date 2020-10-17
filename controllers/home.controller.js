/*
    What is do?
    - build a middleware to connect model with view 
    - get product from model 
    - then render the object to index page 
*/
const productModel = require('../models/products.model')

exports.getHome = (req, res, next) => {

    /**
     * Build filter product 
     * get category 
     * if category && category !== all 
     *      filter
     * else
     *      render all 
     */
    let category = req.query.category
    let validCategory = ['clothes', 'phones', 'computers']
    let productsPromise
    if(category && validCategory.includes(category)) productsPromise = productModel.getProductsByCategory(category)
    else productsPromise = productModel.getAllProducts()
    productsPromise.then(products => {
        res.render('index', {
            products: products
        })
    })
    
}