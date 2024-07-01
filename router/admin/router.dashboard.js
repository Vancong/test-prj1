const express=require('express');
const route=express.Router();
const dashboard=require('../../controllers/admin/dashboard.controllers.js')
route.get('/',dashboard.index);

module.exports=route;