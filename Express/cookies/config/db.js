const mongoose= require('mongoose')
module.exports.mongoconnect=mongoose.connect(
    process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if(!err){
            console.log("connected")
        }else{
            console.log("not Connected")
        }
    }
)