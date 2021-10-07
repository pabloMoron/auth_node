'use strict';

import express from 'express';
const app = express();

app.get('/',(req, res)=>{
    res.send("Root")
});

app.listen(4000, ()=>{
    console.log("Server on 😁 !!");
});

module.exports = app;