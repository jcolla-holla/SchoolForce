import { connect } from "react-redux";
import { clearStatus, fetchAllStudents, 
        deleteStudent, updateStudent } from '../../actions/student_actions';
import { fetchAllUsers } from '../../actions/user_actions'
import { clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from "react-router-dom";
import ParentProfile from "./parent_profile";

const mapStateToProps = state => {
    
    let students;
        if (Object.values(state.entities.students).length === 0) {
            students = [];
        } else {
            students = Object.values(state.entities.students)
                .filter(val => val !== state.entities.students.status);

        };
        
    let formType;
        if (state.modal === null) {
            formType = 'Register Student';
        } else if (Object.values(state.modal.formType) === 'Update Student') {
            formType = 'Update Student';
        } else if (Object.values(state.modal.formType) === 'Update Parent') {
            formType = 'Update Parent';
        }else {
            formType = 'Register Student';
        };

    let studentId;
        if (state.modal !== null) {
            studentId = state.modal.studentId
        } else {
            studentId = '';
        };

    let updateUser;
        if (Object.keys(state.entities.users).length !== 0) {
            updateUser = Object.values(state.entities.users)
                .filter(val => val._id === state.session.user.id);
        };

    let currentUser; 
    if ((Object.keys(state.entities.users).length !== 0) &&
        updateUser[0]._id === state.session.user.id) {
        currentUser = updateUser
    } else {
        currentUser = [state.session.user]
    }

    return {
        currentUser: currentUser,
        students: students,
        formType: formType,
        studentId: studentId,
        status: state.entities.students.status
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllStudents: () => dispatch(fetchAllStudents()),
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
    updateStudent: (student) => dispatch(updateStudent(student)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    clearErrors: () => dispatch(clearErrors()),
    clearStatus: () => dispatch(clearStatus()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ParentProfile)
);