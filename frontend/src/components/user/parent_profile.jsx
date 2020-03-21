import React from 'react';
import { Link } from 'react-router-dom';
import "./parent_profile.css";
import ChildIndexItem from './child_index_item.jsx';

class ParentProfile extends React.Component {

    componentDidMount() {
        this.props.fetchAllStudents();
    }

    render() {
        // let children = this.props.students.filter((student) => student.parentId.includes(this.props.currentUser.id));
        const children = this.props.students.map((student, idx) => {
            return <ChildIndexItem key={idx} student={student} />;
        });

        return (
            <div id='parent-profile-page'>
                <div className="welcome-header">
                    <p>{this.props.currentUser.firstName} {this.props.currentUser.lastName}'s Profile</p>
                    <Link className="create-student-button" to="/student/new">Register Your Student</Link>
                </div>
                <div className="parent-details">
                    <div>
                        Email: {this.props.currentUser.email}
                    </div>
                    <div>
                        Phone Number: {this.props.currentUser.mobile}
                    </div>
                    <div>
                        School ID: {this.props.currentUser.schoolId}
                    </div>
                </div>
                <div className="children-index-container">
                    <h2 className='children-index-header'>Your students</h2>
                    <ul className="children-index" > {children} </ul >
                </div>
            </div>
        )
    }
}

export default ParentProfile;