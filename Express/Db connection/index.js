const express= require ('express')
const app=express()
require('dotenv').config()
require('./config/db')
const port= process.env.PORT

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Helloooooooo")
})




app.listen(port,()=>{
    console.log(`listening ${port}`)
})