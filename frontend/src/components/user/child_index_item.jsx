import React from 'react';
import "./child_index_item.css";

class ChildIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteStudent = this.handleDeleteStudent.bind(this)
        this.handleUpdateStudent = this.handleUpdateStudent.bind(this)
    }

    handleDeleteStudent(e) {
        e.preventDefault()
        const studentId = this.props.student._id
        return this.props.deleteStudent(studentId)
    }


    handleUpdateStudent(e) {
        e.preventDefault()
        const studentId = this.props.student._id
        return this.props.openModal('Update Student', studentId)
    }

    render() {

        let { allergies, specialNeeds, medicalConditions } = this.props.student
        
        const allergiesArr = () => {
            if (allergies.length < 1) {
                return allergies = ""
            } else {
                return allergies.map((allergy, idx) => (
                <p key={`allergy${idx}`}>{allergy}</p>
            ))
        }};

        const specialNeedsArr = () => {
            if (specialNeeds.length < 1) {
                return specialNeeds = ""
            } else {
                return specialNeeds.map((specialNeed, idx) => (
                    <p key={`specialNeed${idx}`}>{specialNeed}</p>
            ))
        }};

        const medicalConditionsArr = () => {
            if (medicalConditions.length < 1) {
                return medicalConditions = ""
            } else {
                return medicalConditions.map((medicalCondition, idx) => (
                    <p key={`medicalCondition${idx}`}>{medicalCondition}</p>
            ))
        }};

        return (
            <li>
                <div className="student-name-container">
                    <div className="student-name">
                        {this.props.student.firstName} {this.props.student.lastName}
                    </div>
                </div> 
                <div className="student-info">
                    <div className='allergies'>
                        <label className="title">
                            Allergies
                        </label>
                            {allergiesArr()}
                        </div>
                    <div className='specialNeeds'>
                        <label className="title">
                            Special Needs
                        </label>
                            {specialNeedsArr()}
                        </div>
                    <div className='medicalConditions'>
                        <label className="title">
                            Medical Conditions
                        </label>
                            {medicalConditionsArr()}
                        </div>
                    <div className='gender'>
                        <label className="title">
                            Gender
                        </label>
                        <p>{this.props.student.gender}</p>
                    </div>
                    <div className='grade'>
                        <label className="title">
                            Grade
                        </label>
                        <p> {this.props.student.grade}</p>
                    </div>
                    <div className='student-index-item-buttons'>
                        <button className='update-student-button'
                            onClick={this.handleUpdateStudent}>
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