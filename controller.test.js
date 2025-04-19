// JavaScript for controller.test
// controller.test.js

const os = require('os');
const machineInfo = os.machine;

const request = require('supertest');
const app = require('./controller');

describe("the print function", () => {
    it('should respond with "This is the home page"', async () => {
        const res = await request(app).get('/home');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('This is the home page');
    });

    it('should respond with user details', async () => {
        const res = await request(app).post('/user').send({
            name: 'Alice',
            email: 'alice@example.com',
            password: 'secure123',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Received user Alice with email alice@example.com');
    });
});