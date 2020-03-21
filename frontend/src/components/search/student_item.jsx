import React from 'react';
import "./student_search_item.css";


class StudentItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
    }

    handleDeleteStudent(e) {
        e.preventDefault()
        const studentId = this.props.student._id
        debugger
        return this.props.deleteStudent(studentId)
    }

    render() {
        
    return (
    <li>
        <div className="checkboxAndName">

                {/* pulled from online resource w checkbox styling: https://codepen.io/melnik909/pen/YjGZqQ */}
                <label className="toggle">
                    <input className="checkboxStudent toggle__input" checked={Boolean(this.props.selectedStudents[this.props.student._id])} type="checkbox" name="student.name" onChange={() => this.props.handleStudentCheck(this.props.student)} />
                        <span className="toggle__label">
                            <span className="toggle__text"></span>
                        </span>
                </label>

            <div className="student-name">
                {this.props.student.firstName} {this.props.student.lastName}
            </div>
        </div>
        <div className="nonNameInfo">
            <div className='allergies'>
                <label className="title">Allergies</label>
                 {this.props.student.allergies.map( (allergy, idx) => (
                <p key={`allergy${idx}`}>{allergy}</p>
            ))}</div>
            <div className='specialNeeds'>
                <label className="title">Special Needs</label>
                 {this.props.student.specialNeeds.map( (specialNeed, idx) => (
                <p key={`specialNeed${idx}`}>{specialNeed}</p>
            ))}</div>
            <div className='medicalConditions'>
                <label className="title">Medical Conditions</label>
                 {this.props.student.medicalConditions.map( (medicalCondition, idx) => (
                <p key={`medicalCondition${idx}`}>{medicalCondition}</p>
            ))}</div>
            <div className='gender'>
                    <label className="title"> Gender</label>
                    <p>{this.props.student.gender}</p>
            </div>
            <div className='grade'>
                <label className="title">Grade</label>
                <p> {this.props.student.grade}</p>
            </div>
            <div className='student-search-item-buttons'>
                <button className='update-student-button'>
                    Update Student
                    </button> 
                <button className='delete-student-button'
                        onClick={this.handleDeleteStudent}>
                        Delete Student
                    </button> 
            </div>
        </div>
    </li>
    )}
}


export default StudentItem;