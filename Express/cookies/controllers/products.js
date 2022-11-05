let product=require('../models/products')

let getAllProducts=async(req,res,next)=>{
    try{
        let products=await product.find().lean()
        
    }
}