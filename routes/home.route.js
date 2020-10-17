/*
    What is do? 
    - use middleware route level
    - get the product from controller 
    - when get to / => execute the getHome function 
    - in last export it to app.js file 
*/

const router = require('express').Router()
const homeController = require('../controllers/home.controller')

router.get('/', homeController.getHome)

module.exports = router;
