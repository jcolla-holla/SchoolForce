import { connect } from 'react-redux';
import { updateStudent } from '../../actions/student_actions';
import { clearErrors } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';
import UpdateStudentForm from "./update_student_form";
import "./create_student_form.css";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        formType: 'Update Student',
        errors: state.errors.session,
        currentUser: state.session.user,
        students: state.entities.students
    }
};


const mapDispatchToProps = dispatch => {
    return {
        processForm: (data) => dispatch(updateStudent(data)),
        closeModal: () => dispatch(closeModal()),
        openModal: (formType, data) => dispatch(openModal(formType, data)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateStudentForm));

