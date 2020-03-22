import { connect } from 'react-redux';
import { updateStudent } from '../../actions/student_actions';
import { clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import UpdateStudentForm from "./update_student_form";
import "./create_student_form.css";

const mapStateToProps = state => {
    return {
        formType: 'Update Student',
        errors: state.errors.session,
        currentUser: state.session.user
    }
};


const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(updateStudent(data)),
        closeModal: () => dispatch(closeModal()),
        openModal: (formType) => dispatch(openModal(formType)),
        clearErrors: () => dispatch(clearErrors())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudentForm);

