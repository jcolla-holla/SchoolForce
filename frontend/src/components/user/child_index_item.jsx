import React from 'react';
import "./child_index_item.css";

class ChildIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
    }

    handleDeleteStudent(e) {
        e.preventDefault()
        const studentId = this.props.student._id
        return this.props.deleteStudent(studentId)
    }

    render() {

        return (
            <li>
                <div className="student-name-container">
                    <div className="student-name">
                        {this.props.student.firstName} {this.props.student.lastName}
                    </div>
                </div> 
                <div className="student-info">
                    <div className='allergies'>
                        <label className="title">Allergies</label>
                        {this.props.student.allergies.map((allergy, idx) => (
                            <p key={`allergy${idx}`}>{allergy}</p>
                        ))}</div>
                    <div className='specialNeeds'>
                        <label className="title">Special Needs</label>
                        {this.props.student.specialNeeds.map((specialNeed, idx) => (
                            <p key={`specialNeed${idx}`}>{specialNeed}</p>
                        ))}</div>
                    <div className='medicalConditions'>
                        <label className="title">Medical Conditions</label>
                        {this.props.student.medicalConditions.map((medicalCondition, idx) => (
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
                    <div className='student-index-item-buttons'>
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
        )
    }
}

export default ChildIndexItem;