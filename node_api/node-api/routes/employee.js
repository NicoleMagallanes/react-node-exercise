const express = require('express');
const router = express.Router();

let employees = [
  {id: 1, firstName:"Juan", lastName:"Dela Cruz", age: 24,gender: "male", jobTitle: "Manager"},
  {id: 2, firstName:"Anna", lastName:"Salvador", age: 21, gender: "female", jobTitle: "Junior Dev"},
  {id: 3, firstName:"Mark", lastName:"Bautista", age: 28, gender: "male", jobTitle: "Senior Fullstack Dev"},
  {id: 4, firstName:"Micheal", lastName:"Garcia", age: 31, gender: "male", jobTitle: "CEO"},
];

// Get all employees
router.get('/', (req, res, next) => {
  res.send(employees);
});

// Get an employee by ID
router.get('/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');
  res.json(employee);
});

// Add a new employee
router.post('/', (req, res) => {
  const employee = {
    id: employees.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    gender: req.body.gender,
    jobTitle: req.body.jobTitle
  };
  employees.push(employee);
  res.json(employee);
});

router.post('/employees', (req, res) => {
  const newEmployee = req.body;
  console.log(newEmployee); 
  res.status(200).json({ message: 'Employee added successfully.' });
});

module.exports = router;