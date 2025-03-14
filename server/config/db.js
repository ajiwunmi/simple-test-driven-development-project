const mongoose = require('mongoose');
require('dotenv').config();

 
const connectDB = async (url) =>{
    try{
       
        const connect  = await mongoose.connect(url)
        console.log(`MongoDB connected: ${connect.connection.host}`);

    }catch(error){
        console.log(`Error: ${error.message}`);
        process.exit(1);

    }
}

module.exports =  connectDB;
