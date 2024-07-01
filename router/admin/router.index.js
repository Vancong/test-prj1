const express=require('express');
const dashboard=require('./router.dashboard.js');
const product=require('./router.product.js');
module.exports.Admin=(app) => {
app.use('/ad/dashboard',dashboard);
app.use('/ad/product',product);
}