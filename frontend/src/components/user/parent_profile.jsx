import React from 'react';
import "./parent_profile.css";
import ChildIndexItem from './child_index_item';

class ParentProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            registrationSuccess: false,
        }
        this.handleUpdateParent = this.handleUpdateParent.bind(this);
    }
    
    componentDidMount() {
        if (this.props.studentId === '') {
            return this.props.fetchAllStudents();
        };
    }

    componentWillMount() {
      this.props.fetchAllUsers()
    }

    handleUpdateParent(e) {
        e.preventDefault();
        const parentId = this.props.currentUser[0]._id;
        return this.props.openModal("Update Parent", parentId);
    }

    componentDidUpdate() {
        if (this.props.status === 200) {
            this.state.registrationSuccess = true;
            window.setTimeout(() => {
                this.setState({ registrationSuccess: false })
            }, 6000)
        this.props.clearStatus();
        }
    }

    render() {

        if (this.props.students === undefined) {
            return <div></div>
        };

        let { deleteStudent, updateStudent, openModal } = this.props;
        
        // filters through all children matching currentUser.id === child.parentId
        let remove200Status = Object.values(this.props.students).filter(val => val !== 0);
  
        let currentUserChildren = 
            remove200Status.filter(val => val.parentId[0] === this.props.currentUser[0]._id);
        
        let successMessage;
        if (this.state.registrationSuccess) {
            successMessage = 
                <div className="success-message-div">
                <span>Student has been successfully registered.</span>
            </div>
        } else {
            successMessage = <div className="empty-success-msg-div"></div>;
        }

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

    if (this.props.currentUser[0].adminStatus === false 
        || this.props.currentUser[0].admin === false ) {
        return (
          
        <div>
          {successMessage}
          
        <div id="parent-profile-page">
            <div className="parent-welcome-header">
            <p>
                {this.props.currentUser[0].firstName} {this.props.currentUser[0].lastName}
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
            <div>Email: {this.props.currentUser[0].email}</div>
            <div>Phone Number: {this.props.currentUser[0].mobile}</div>
            <div>School ID: {this.props.currentUser[0].schoolId}</div>
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
        </div>
        );
    } else {
        return (
          <div id="parent-profile-page">
            <div className="parent-welcome-header">
              <p>
                {this.props.currentUser[0].firstName}{" "}
                {this.props.currentUser[0].lastName}
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
              <div>Email: {this.props.currentUser[0].email}</div>
              <div>Phone Number: {this.props.currentUser[0].mobile}</div>
              <div>School ID: {this.props.currentUser[0].schoolId}</div>
            </div>
          </div>
        );
    }

  }
}

export default ParentProfile;