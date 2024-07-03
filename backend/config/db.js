const mongoose = require("mongoose")
async function connectDB(){
    try{
       await mongoose.connect(process.env.MONGODB_URI)
console.log("connected to db sucessfully");
    }
    catch(err){
        console.log(err)
    }
}
module.exports=connectDB;