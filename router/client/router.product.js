const express=require('express');
const route=express.Router();
const product=require('../../controllers/client/product.contro');
route.get('/',product.productContro);

module.exports=route;