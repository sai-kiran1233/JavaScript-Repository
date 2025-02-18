const express = require("express");
const app = express();

app.use(express.json());

let students = [];

// POST request to add a new student
app.post("/student", (req, res) => {
  const { id, name, gpa } = req.body;
  const existingStudent = students.find((student) => student.id === id);
  if (existingStudent) {
    return res
      .status(400)
      .json({ error: "Student with this ID already exists" });
  }
  students.push({ id, name, gpa });
  res.status(201).json({ message: "Student added successfully" });
});

//  retrieve all students
app.get("/allStudents", (req, res) => {
  res.json(students);
});

app.get("/student/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students available" });
  }

  const topper = students.reduce((prev, current) => {
    return prev.gpa > current.gpa ? prev : current;
  });
  res.json(topper);
});
//  retrieve a student by ID
app.get("/student/:id", (req, res) => {
  const id = req.params.id;

  const student = students.find((user) => user.id == id);

  if (!student) res.status(404).json({ message: "Student not exsist" });

  const keys = Object.keys(req.body);
  keys.forEach((key) => {
    if (!student[key]) res.status(404).json({ message: "Invalid User" });
  });

  res.json(student);
});

app.listen(5000, () => {
  console.log("Server is running on 5000");
});
