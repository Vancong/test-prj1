const express=require('express');
const route=express.Router();

// '/' dai dien cho /contact 
// '/sdt' la /contact/sdt

route.get('/', (req, res) => {
    res.render('./client/pages/contact/index.pug');
  });

module.exports=route;