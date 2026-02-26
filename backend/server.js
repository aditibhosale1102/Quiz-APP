// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Allows frontend to communicate with backend
app.use(express.json()); // Parses incoming JSON requests

// In-memory Database
let courses = [
    { id: 1, name: "Java", totalQuestions: 87, totalMarks: 97 },
    { id: 2, name: "GK", totalQuestions: 10, totalMarks: 5 },
    { id: 3, name: "Django", totalQuestions: 10, totalMarks: 10 },
];

let questions = [];

// Get all courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Add a new course
app.post('/api/courses', (req, res) => {
    const { name, totalQuestions, totalMarks } = req.body;
    const newCourse = {
        id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1,
        name,
        totalQuestions: parseInt(totalQuestions),
        totalMarks: parseInt(totalMarks)
    };
    courses.push(newCourse);
    res.status(201).json({ message: "Course added successfully", course: newCourse });
});

// Get all questions
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

// Add a new question
app.post('/api/questions', (req, res) => {
    const newQuestion = {
        id: questions.length > 0 ? questions[questions.length - 1].id + 1 : 1,
        ...req.body
    };
    questions.push(newQuestion);
    res.status(201).json({ message: "Question added successfully", question: newQuestion });
});

// Student Login
app.post('/api/student/login', (req, res) => {
    const { username, password } = req.body;
    // For this requirement, we return a mock user with the name "Samarth" if credentials are provided
    if (username && password) {
        res.status(200).json({ success: true, user: { name: "Samarth", username } });
    } else {
        res.status(400).json({ success: false, message: "Invalid credentials" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
