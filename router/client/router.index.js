const express=require('express');
const home=require('./router.home.js');
const product=require('./router.product.js');
const contact=require('./router.contact.js');
module.exports.index=(app) => {
app.use('/',home );
app.use('/product',product);
app.use('/contact',contact)
}