const express=require('express')
const usersRoute=express.Router()

let usersController=require('./../controllers/')

usersRoute.post('/register',usersController)
usersRoute.post('/login',usersController)

module.exports=usersRoute