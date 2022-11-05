const express=require('express')
const router=express.Router()

const productController=require('../controllers/products')
const auth =require('./../middleware/auth')

router.get('/products',productController)
router.post('/add-product',productController)
router.put('/edit-product',productController)
router.delete('/delete-product',productController)

module.exports.router