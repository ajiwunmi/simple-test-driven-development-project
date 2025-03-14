const {getUsers, createUser} = require('../utility/helper');

const getUsersController = async (req, res, next) =>{
const users = await getUsers();
  return   res.status(200).json(users)
}

const  createUserController = async (req, res, next) =>{
    try{
        const user  = await createUser(req.body);

		return res.status(201).json(user);

    }catch(error){
        console.log(`Error: ${error.message}`);
        return {error: error.message};
    }
    
}


module.exports = { getUsersController, createUserController };
