import { connect } from "react-redux";
import { updateStudent, fetchAllStudents } from "../../actions/student_actions";
import { clearErrors } from "../../actions/session_actions";
import { closeModal, openModal } from '../../actions/modal_actions';
import UpdateStudentForm from "./update_student_form";
import "./create_student_form.css";

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        currentUser: state.session.user,
        formType: 'Update Student',
        studentId: state.modal.studentId,
        updateStudent: Object.values(state.entities.students)
                    .filter(val => val._id === state.modal.studentId)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (payload) => dispatch(updateStudent(payload)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        clearErrors: () => dispatch(clearErrors()),
        fetchAllStudents: () => dispatch(fetchAllStudents()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudentForm);