import React from 'react';
import "./parent_profile.css";
import ChildIndexItem from './child_index_item';

class ParentProfile extends React.Component {
  
  constructor(props) {
      super(props);

      this.handleUpdateParent = this.handleUpdateParent.bind(this);
  }

  componentDidMount() {
    if (this.props.studentId === "") {
      return this.props.fetchAllStudents();
    }
  }

  handleUpdateParent(e) {
    e.preventDefault();
    const parentId = this.props.currentUser.id;
    return this.props.openModal("Update Parent", parentId);
  }

  render() {
    if (this.props.students === undefined) {
      return <div></div>;
    }

    const {
      deleteStudent,
      updateStudent,
      openModal,
      students,
      currentUser
    } = this.props;

    // filters through all children matching currentUser.id === child.parentId
    const currentUserChildren = Object.values(students).filter(
      ele => ele.parentId[0] === currentUser.id
    );

    let childrenList;
    if (currentUserChildren.length === 0) {
      childrenList = <p>You have not registered any students yet</p>;
    } else {
      // maping children matching currentUser.id === child.parentId
      childrenList = currentUserChildren.map((student, idx) => {
        return (
          <ChildIndexItem
            key={idx}
            student={student}
            deleteStudent={deleteStudent}
            updateStudent={updateStudent}
            openModal={openModal}
          />
        );
      });
    }

    return (
      <div id="parent-profile-page">
        <div className="parent-welcome-header">
          <p>
            {this.props.currentUser.firstName} {this.props.currentUser.lastName}
            's Profile
          </p>
          <button
            className="update-profile-button"
            onClick={this.handleUpdateParent}
          >
            Update profile
          </button>
        </div>
        <div className="parent-details">
          <div>Email: {this.props.currentUser.email}</div>
          <div>Phone Number: {this.props.currentUser.mobile}</div>
          <div>School ID: {this.props.currentUser.schoolId}</div>
        </div>
        <div className="children-index-header-container">
          <h2 className="children-index-header">Your students</h2>
          <button
            className="create-student-button"
            onClick={() => this.props.openModal("Register Student")}
          >
            Register Your Student
          </button>
        </div>
        <div className="children-index-container">
          <ul className="children-index">{childrenList}</ul>
        </div>
      </div>
    );
  }
}

export default ParentProfile;