const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// GET /home
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

// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello world!");
}

module.exports = print;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});