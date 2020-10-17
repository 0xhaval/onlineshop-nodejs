const express           = require('express')
const { MongoClient }   = require('mongodb')
const path              = require('path')       
const app               = express()         // invoke the module after import 
const homeRouter        = require('./routes/home.route')

// tell to express for static files, images I upload it  
app.use(express.static(path.join(__dirname, 'assets'))) 
app.use(express.static(path.join(__dirname, 'images'))) 

// set the setting of template engine 
app.set('view engine', 'ejs')
app.set('views', 'views')


app.use('/', homeRouter)


app.get('/', (req, res, next) => {
    // use render method to return the ejs files 
    res.render('index')
})



// load and start the server 
app.listen(3000, () => {
    console.log('server listen on port 3000')
})

