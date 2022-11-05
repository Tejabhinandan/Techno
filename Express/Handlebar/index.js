const express= require('express')
const app= express()
const exphbs= require('express-handlebars')
const port =5000

app.use(express.static('public'))
// setup handlebars
app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    let person={
        uname:"Raju",
        role:"admin"
    }
    // let {uname,role}=person
    res.render('home.handlebars',{person})
})

app.get('/about',(req,res)=>{
    let person=[
        {
        username:"teja",
        role:"admin"
    },
        {
        username:"Dhanush",
        role:"!admin"
    },
        {
        username:"Umashankar",
        role:"!admin"
    }
]
    res.render('about.handlebars',{person})
})
app.get('/contact',(req,res)=>{
    res.render('contact.handlebars',{
        username:['raju','rastogi','shubham'],
        isAdmin:true
    })
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`)
})

