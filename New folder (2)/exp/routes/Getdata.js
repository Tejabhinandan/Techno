const express=require('express')
const router=express.Router()

const loginController=require('../controllers/mob')

router.get("/login",loginController.getAllDetails)

router.post("/get-login",loginController.addDetails)



module.exports=router