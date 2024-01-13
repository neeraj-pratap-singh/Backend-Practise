const express = require('express');
const students = require('./studentsData'); // Import the student data
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

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

// POST API to add a new student
app.post('/addStudent', (req, res) => {
    const newStudent = req.body;
    console.log(newStudent)
    students.push(newStudent);
    res.status(201).send('Student added successfully');
});

// PUT API to update a student's data
app.put('/updateStudent/:name', (req, res) => {
    const name = req.params.name;
    const studentIndex = students.findIndex(s => s.name.toLowerCase() === name.toLowerCase());

    if (studentIndex > -1) {
        students[studentIndex] = {...students[studentIndex], ...req.body};
        res.send('Student updated successfully');
    } else {
        res.status(404).send('Student not found');
    }
});

// DELETE API to remove a student
app.delete('/deleteStudent/:name', (req, res) => {
    const name = req.params.name;
    const studentIndex = students.findIndex(s => s.name.toLowerCase() === name.toLowerCase());

    if (studentIndex > -1) {
        students.splice(studentIndex, 1);
        res.send('Student deleted successfully');
    } else {
        res.status(404).send('Student not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
