import { connect } from "react-redux";
import { createNewStudent } from "../../actions/student_actions";
import { clearErrors } from "../../actions/session_actions";
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateStudentForm from "./create_student_form";
import "./create_student_form.css";

const mapStateToProps = state => {
  return {
    formType: 'Register Student',
    errors: state.errors.session,
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (data) => dispatch(createNewStudent(data)),
    closeModal: () => dispatch(closeModal()),
    openModal: (formType) => dispatch(openModal(formType)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudentForm);