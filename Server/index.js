const express=require('express')
const app=express()
const ConnectWithDB= require('./modules/mongoConnect')
app.get('/',(res,req)=>{
    req.send("I am okayy")
})

// const mongoose=require('mongoose')

// mongoose.connect("mongodb://localhost:27017/Grocery").then(()=>{
//     console.log("Connected Successfully")
// }).catch((e)=>{
//     console.log("Error is: "+e);
// })
ConnectWithDB();
app.listen(5000,()=>{

console.log("Server Started Successfully!");

})