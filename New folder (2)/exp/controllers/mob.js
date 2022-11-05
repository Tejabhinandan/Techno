let login=require('../models/mob')

let getAllDetails=async(req,res,next)=>{
    try{
        let details=await login.find().lean()
        res.json({
            error:false,
            message:"all details",
            data:details
        })
    }
   catch(err){
   next(err)
   }
}

let addDetails=async(req,res,next)=>{
    try{
        let {   firstName,lastName,Age  } = req.body

      await login.insertMany([{ fName, lName}])
      res.json({
        error:false,
        message:"login details added successfully",
        data:null
    })
    }
      catch(err){
        next(err)  
      }
}

 

module.exports={
    getAllDetails,
    addDetails,
    
}