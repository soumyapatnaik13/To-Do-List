const express = require("express");
const app= express();
const mongoose= require("mongoose")
const port=3000;
const router = require("./Router/router")


mongoose.connect('mongodb://127.0.0.1:27017/ToDo').then(()=>{
    console.log("mongoose connected")
}).catch(()=>{
    console.log("could not find")
})

app.use(express.json());

app.use("/api",router);
app.listen(port,()=>{
    console.log(`port is listeing at : ${port}`)
})