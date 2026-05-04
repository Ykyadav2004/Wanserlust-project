const mongoose = require('mongoose');

const initData = require("./data");
const Listing = require("../models/listing");

main().then(()=>{
    console.log("connection was successful");
}).catch((err)=>{
    console.log(err);
})

async function main(){

 await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async() =>{
    await Listing.deleteMany({});


  // data ko insert karne ke just phele data array mae map se owner set kar denge
  // but ye map same array mae changes nhi karta ek new array banata hai
    initData.data =  initData.data.map((obj)=>({...obj,owner : "69f44af8d42243eadcba6ee4"}));


    await Listing.insertMany(initData.data);
    console.log("data adding started");
}

initDB();
  