const mongoose = require("mongoose")
let Schema = mongoose.Schema

let loginSchema=new Schema({
    firstName:{
        type:String,
        minlength:3,
        maxlength:50
    },
   
    lastName:{
        type:String,
        minlength:3,
        maxlength:100
    },
    Age:{
        type:Number,
        minlength:1,
        maxlength:100
    },
})

module.exports=mongoose.model("mob",loginSchema)