import React from 'react';
import "./child_index_item.css";
import { Link } from 'react-router-dom';

class ChildIndexItem extends React.Component {

    render() {
        return (
            <li>
                <div className="student-name-container">
                    <div className="student-name">
                        {this.props.student.firstName} {this.props.student.lastName}
                    </div>
                    <Link className="update-student-button" to="/student/update">Update Student Info</Link>
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
                </div>
            </li>
        )
    }
}

export default ChildIndexItem;