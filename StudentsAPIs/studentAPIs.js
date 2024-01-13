const express = require('express');
const students = require('./studentsData'); // Import the student data
const app = express();
const port = 3000;

// GET API to return all student data
app.get('/getAllStudents', (req, res) => {
    res.json(students);
});

// GET API to return student data by name
app.get('/students/:name', (req, res) => {
    const name = req.params.name;
    const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
