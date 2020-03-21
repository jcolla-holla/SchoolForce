const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    parentId: {
        type: [Schema.Types.ObjectId],
        ref: 'users',
        required: true
    },
    allergies: {
        type: [String]
    },
    specialNeeds: {
        type: [String]
    },
    medicalConditions: {
        type: [String]
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);