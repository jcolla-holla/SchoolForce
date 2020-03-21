const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')

const Student = require('../../models/Student');
const validateStudentInput = require('../../validation/student');

router.get("/test", (req, res) => res.json({ msg: "This is the students route." }));


router.get('/', (req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => 
            res.status(404).json({ err: 'No students found' }))
});

// router.get('/:parentId', (req, res) => {
//     Student.findById(req.params.parentId)
//         .then(student => res.json(student))
//         .catch(err =>
//             res.status(404).json(err))
// });

router.get('/:id', (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err =>
            res.status(404).json(err))
});


router.delete('/:id', (req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Student deleted." }))
        .catch(err =>
            res.status(404).json(err))
});

router.put('/edit/:id', (req, res) => {
    debugger
    let updatedStudent = {}
        updatedStudent.firstName = req.body.firstName;
        updatedStudent.lastName = req.body.lastName;
        updatedStudent.parentId = req.user.id;
        updatedStudent.allergies = req.body.allergies;
        updatedStudent.specialNeeds = req.body.specialNeeds;
        updatedStudent.medicalConditions = req.body.medicalConditions;
        updatedStudent.gender = req.body.gender;
        updatedStudent.dateOfBirth = req.body.dateOfBirth;
        updatedStudent.startDate = req.body.startDate;
        updatedStudent.grade = req.body.grade;

    Student.findByIdAndUpdate(req.params.id, 
        { $set: updatedStudent }, 
        { new: true })
        .then(() => res.json({ msg: "Student updated." }))
        .catch(err =>
            res.status(404).json(err))
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(req);

        const { errors, isValid } = validateStudentInput(req.body);

        if (!isValid) {
            return res.status(404).json(errors);
        }

        const newStudent = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            parentId: req.user.id,
            allergies: req.body.allergies,
            specialNeeds: req.body.specialNeeds,
            medicalConditions: req.body.medicalConditions,
            gender: req.body.gender,
            dateOfBirth: req.body.dateOfBirth,
            startDate: req.body.startDate,
            grade: req.body.grade
        });

        console.log(newStudent);

        newStudent.save()
            .then(() => res.json({ msg: "New student created." }))
            .catch(err =>
                res.status(404).json(err))
    }
);

module.exports = router;
