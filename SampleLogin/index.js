require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

// Middlewares
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/signup', async (req, res) => {
    try {
        // Encrypt the user's password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // Create a new user
        const user = new User({ username: req.body.username, password: hashedPassword });
        // Save the user to the database
        await user.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        // Find the user by username
        const user = await User.findOne({ username: req.body.username });
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            // Create a token
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token: token });
        } else {
            res.status(400).send('Invalid username or password');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Expected "Authorization: Bearer TOKEN"
    
    if (!token) return res.status(401).send('Access Denied / Unauthorized request');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Add user payload to request
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};

// Protected Route
app.get('/protected', verifyToken, (req, res) => {
    res.send('This is a protected route. You are authenticated.');
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
