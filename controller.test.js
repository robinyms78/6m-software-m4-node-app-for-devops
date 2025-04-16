const request = require('supertest');
const app = require('./app');
const targetFn = require("./controller");

describe("the print function", () => {

    // standard best practice
    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!'", () => {
        const mockReq = {};
        const mockRes = {
            send: jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello world!"); // If you change this value, the test will fail.
    })

    it('the print function', async () => {
        const res = await targetFn.request(app).get('/home');
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