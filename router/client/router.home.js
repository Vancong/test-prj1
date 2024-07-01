const express=require('express');
const route=express.Router();
const home=require('../../controllers/client/home.contro.js')
route.get('/',home.homeContro);

module.exports=route;