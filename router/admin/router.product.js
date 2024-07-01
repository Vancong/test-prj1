const express=require('express');
const route=express.Router();
const product=require('../../controllers/admin/product.controllers.js')
route.get('/',product.index);

module.exports=route;