const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 7000
// importing products route
let productRoute=require('./Routes/products')
//setup template engine 
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")
// body parser middleware used to get data (object) from form body (req.body)
app.use(express.urlencoded({ extended: true }))

// creating routes 
app.use('/products',productRoute)
app.get('/', (req, res) => {
    res.render("home.handlebars")
})  

app.listen(port, () => {
    console.log(`listening to ${port}`);
})


// let dburl="mongodb+srv://tejabhi:tejabhi@cluster0.mt4g6.mongodb.net/?retryWrites=true&w=majority"