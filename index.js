const express=require("express");
const app=express();

require('dotenv').config();
const port=process.env.PORT;

const routeClinet=require('./router/client/router.index');
routeClinet.index(app);
const routeAdmin=require("./router/admin/router.index");
routeAdmin.Admin(app);
// set temlit engine cho pug
app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.static('public')); 

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOOSE_URL);

app.listen(port,()=>{
    console.log(`dang chay cong ${port}`);
});

