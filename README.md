# TDD Project with Jest, Supertest, MongoDB, Express, and Node.js

This project demonstrates Test-Driven Development (TDD) concepts using Jest, Supertest, MongoDB, Express, and Node.js. It follows best practices for testing, project structure, and clean code principles.

## Features

* RESTful API built with Express.js
* MongoDB database integration
* Comprehensive unit and integration testing using Jest and Supertest
* Follows TDD principles

## Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v18 or later)
* [MongoDB](https://www.mongodb.com/) (local or cloud instance)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ajiwunmi/simple-test-driven-development-project.git
   cd simple-test-driven-development-project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add the following environment variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/tdd_demo
   ```
4. Start the MongoDB server.

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

## Running Tests

To run all tests with Jest:

```bash
npm test
```

For watch mode during development:

```bash
npm run test:watch
```

## Writing Tests

* Use **Jest** for unit tests.
* Use **Supertest** for API integration tests.
* Follow TDD by writing tests before implementing features.

### Sample Test (User Route)

```javascript
const request = require('supertest');
const app = require('../../src/app');

describe('User Routes', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({ name: 'John Doe', email: 'john@example.com' });
    
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('name', 'John Doe');
    });
});
```

## Key Dependencies

* **Express.js** : Web framework for building APIs
* **MongoDB** : NoSQL database for data persistence
* **Mongoose** : ODM library for MongoDB integration
* **Jest** : JavaScript testing framework for unit testing
* **Supertest** : Library for HTTP assertions and integration testing
* **dotenv** : To manage environment variables

## Best Practices for TDD

1. **Write the Test First:** Write a failing test that defines the desired functionality.
2. **Implement Code:** Write the minimum code required to pass the test.
3. **Refactor Code:** Clean up the code while ensuring tests still pass.

## License

This project is licensed under the [MIT License](https://chatgpt.com/c/LICENSE).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for improvements or bug fixes.
