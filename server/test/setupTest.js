const dotenv = require('dotenv').config();
const connectDB = require('../config/db');
const mongoose = require('mongoose');
const users = require('./data/users');
const User = require("../model/userModel");
const {createUser, getUsers} = require('../utility/helper');

const url = process.env.MONGO_URI;
const config = async() =>{

    beforeAll(async() => {
        await connectDB(url);
        await User.deleteMany({});
        
    });
    beforeEach(async() => {
        await User.deleteMany();
        await Promise.all(
                users.map( async (user) => await createUser(user))
            );
    });


    afterAll(async ()=>{
        await User.deleteMany();
        await mongoose.connection.close();
        
    })

}

    
config();
