const mongoose =require('mongoose');


const ConnectWithDB= async ()=>{
    await mongoose.connect('mongodb://localhost:27017/Grocery');
    console.log("Connected Successfully")
}

module.exports=ConnectWithDB;

