const express= require('express')
const app= express()
const port=5000
const path=require('path')

// 2 middleware to get date
let getDate=(req,res,next)=>{
    console.log("middleware executed")
    let data=Date.now()
    // we can modify req and res object
    req.requestDate=data
    console.log("modified  req",req)
    // without next we cont execute middleware
    next()
}
// using the middleware
app.use(getDate)

// 3
app.get('/',(req,res)=>{
    res.send('hello '+ new Date(req.requestDate))
})

// 1 creating req and res
// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })

app.get('/add',(req,res)=>{
    res.send('Get add')
    console.log("get add")
})
app.get('/add',(req,res)=>{
    res.send('Get add')
    console.log("get add")
})

app.post('/add',(req,res)=>{
    res.send('post data')
    console.log('post data')
})

// 4 click date 
app.get('/getDate',(req,res)=>{
    res.send(`
    <p>Current date: </p>
    <h2 style=color:red>${new Date(req.requestDate)}</h2>
    <button onclick="alert('U clicked me')"style=color:red>Click Me</button>
    `)
})

// 5 inbuilt middleware - provide location of static web resources
// to access it from the browser
app.use(express.static('./public'))

app.use(express.static('./files'))

// 6 to create dummy path
// 1 arg=> dummy path , 2nd arg => actual path
// http://localhost:4000/biryani/data.txt

app.use('/biryani',express.static('./files'))

// 7 path
// we have to give static to go through <a> tag
app.use(express.static('./public/product'))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/product/home.html'))
})


// 8 create an error
app.all('*',(req,res)=>{
    throw new Error('path doesnt exists')
}) 
//error handling middleware write at last
app.use((err,req,res,next)=>{
    res.status(500)
    res.send(err.message)
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})