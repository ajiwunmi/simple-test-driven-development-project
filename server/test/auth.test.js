const dotenv = require('dotenv').config();
const request = require('supertest');
const app = require('../app');

describe("it should test user registration ", () =>{

    it("It should just pass", async()=>{

        const {body , statusCode } = await request(app).get('/api/v1/auth/register');
        expect(statusCode).toBe(200);
        expect(body.length).toBeGreaterThan(0);
        expect(body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                _id : expect.any(String),
                name : expect.any(String),
                email : expect.any(String)
            })
        ]));
       

    })

    it('it should create user properly', async()=>{

        const userData = {
            name: 'test',
            email : 'test@gmail.com',
            password: 'test'
        }
        const {body, statusCode} = await request(app).post('/api/v1/auth/register').send(userData); 
        expect(statusCode).toBe(201);
        expect(body).toEqual(expect.objectContaining({
            _id : expect.any(String),
            name : expect.any(String),
            email : expect.any(String)
        }));
        expect(body.name).toBe(userData.name);
        expect(body.email).toBe(userData.email);
        expect(body.password).not.toBe(userData.password);

    });


});
