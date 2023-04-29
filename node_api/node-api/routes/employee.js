const express = require('express');
const router = express.Router();

let employees = [
  {id: 1, firstName:"Juan", lastName:"Dela Cruz", age: 24,gender: "male", jobTitle: "Manager"},
  {id: 2, firstName:"Anna", lastName:"Salvador", age: 21, gender: "female", jobTitle: "Junior Dev"},
  {id: 3, firstName:"Mark", lastName:"Bautista", age: 28, gender: "male", jobTitle: "Senior Fullstack Dev"},
  {id: 4, firstName:"Micheal", lastName:"Garcia", age: 31, gender: "male", jobTitle: "CEO"},
];

// Get all employees
router.get('/', (req, res) => {
  res.json(employees);
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

// Update an employee by ID
router.put('/:id', (req, res) => {
  const employee = employees.find(e => e.id === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee not found');
  employee.firstName = req.body.firstName;
  employee.lastName = req.body.lastName;
  employee.age = req.body.age;
  employee.gender = req.body.gender;
  employee.jobTitle = req.body.jobTitle;
  res.json(employee);
});

// Delete an employee by ID
router.delete('/:id', (req, res) => {
  const employeeIndex = employees.findIndex(e => e.id === parseInt(req.params.id));
  if (employeeIndex === -1) return res.status(404).send('Employee not found');
  employees.splice(employeeIndex, 1);
  res.send('Employee deleted');
});

module.exports = router;