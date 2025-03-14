const { createUser, getUsers } = require('../utility/helper');

describe('Test all utitlity function ', () => { 

    it('should  create user properly ', async() =>{
        const userData = {
            name: 'test',
            email : 'test@test.com',
            password: 'test'
        }
        const user = await createUser(userData);
        // expect(user).toHaveProperty('_id');
        // expect(user).toHaveProperty('name', 'test');
        expect(user).toEqual( expect.objectContaining({
            _id : expect.any(Object),
            name : expect.any(String),
            email : expect.any(String)  
        })); 
        expect(user.name).toBe(userData.name);
        expect(user.email).toBe(userData.email);
        expect(user.password).not.toBe(userData.password);
    });

    it('It should get list of users', async() =>{
        const users = await getUsers();
        console.log(users);
        expect(users).toEqual(expect.any(Array));
        expect(users.length).toBeGreaterThan(0);
    }); 

});
