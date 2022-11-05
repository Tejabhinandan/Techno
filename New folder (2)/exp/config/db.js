const  mongoose = require('mongoose')

module.exports.mongooseconnect=mongoose.connect(
    process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(!err){
            console.log("db connection successsful")
        }else{
            console.log("db failed to connect")
        }
    })