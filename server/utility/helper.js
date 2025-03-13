const User = require('../model/userModel');
const bycrypt = require('bcryptjs');

//Create a user
const createUser = async (userData) =>{

    try{
        console.log('Creating user');
            const {name , email, password} = userData;    
            const salt = await  bycrypt.genSalt(10);
            const hashpassword = await bycrypt.hash(password, salt);
            const newuser = await User.create({
                name,
                email,
                password: hashpassword,
        });

       
        return newuser;
    }catch(error){
        console.log(`Error: ${error.message}`);
        return {
            error: error.message
        }
     }   
}

//get all users
const getUsers = async () =>{
    try{
        const users = await User.find({});
        return users;
    }catch(error){
        console.log(`Error: ${error.message}`);
        return {
            error: error.message
        }
    }
}

module.exports = {
    createUser,
    getUsers
}
