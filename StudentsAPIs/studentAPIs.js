const express = require('express');
const students = require('./studentsData'); // Import the student data
const app = express();

// GET API to return all student data
app.get('/getAllStudents', (req, res) => {
    res.json(students);
});

// GET API to return student data by name
app.get('/student/:name', (req, res) => {
    const name = req.params.name;
    const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student record not found, try with another name.');
    }
});

// POST API to add a new student
app.post('/addStudent', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).send('Student added successfully');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port:3000');
});
