const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// GET /homeuse
app.get('/home', (req, res) => {
    res.send('This is the home page');
});

// POST /user
app.post('/user', (req, res) => {
    const { name, email, password } = req.body;

    if ( !name || !email || !password) {
        return res.status(400).json({ message: 'Missing name, email, or password' });
    }

    console.log(`User created: ${name}, ${email}`);
    res.json({ message: `Received user ${name} with email ${email}`});
});

module.exports = app;