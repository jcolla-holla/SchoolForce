import { connect } from "react-redux";
import { fetchAllStudents, deleteStudent, updateStudent } from '../../actions/student_actions';
import { clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import { withRouter } from "react-router-dom";
import ParentProfile from "./parent_profile";

const mapStateToProps = state => {
    let students;
        if (Object.values(state.entities.students).length === 0) {
            students = [];
        } else {
            students = Object.values(state.entities.students);
        }
        
    let formType;
        if (state.modal === null) {
            formType = 'Register Student';
        } else if (Object.values(state.modal.formType) === 'Update Student') {
            formType = 'Update Student';
        } else {
            formType = 'Register Student';
        } 

    let studentId;
    if (state.modal !== null) {
        studentId = state.modal.studentId
    } else {
        studentId = '';
    } 

    return {
        currentUser: state.session.user,
        students: students,
        formType: formType,
        studentId: studentId
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAllStudents: () => dispatch(fetchAllStudents()),
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
    updateStudent: (student) => dispatch(updateStudent(student)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    clearErrors: () => dispatch(clearErrors()),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ParentProfile)
);