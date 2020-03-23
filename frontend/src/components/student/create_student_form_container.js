import { connect } from "react-redux";
import { createNewStudent } from "../../actions/student_actions";
import { clearErrors } from "../../actions/session_actions";
import { closeModal, openModal } from '../../actions/modal_actions';
import CreateStudentForm from "./create_student_form";
import "./create_student_form.css";

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    currentUser: state.session.user,
    formType: 'Register Student'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (payload) => dispatch(createNewStudent(payload)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudentForm);