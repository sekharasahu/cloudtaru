const express = require('express');
const app = express();

app.use(require('./route/route'));

app.listen(3000, (err)=>{
    if(err) throw err;
    console.log("Server is running 3000");
})