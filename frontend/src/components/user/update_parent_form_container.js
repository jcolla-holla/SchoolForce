import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import { clearErrors } from "../../actions/session_actions";
import { closeModal, openModal } from "../../actions/modal_actions";
import UpdateParentForm from "./update_parent_form.jsx";
import "./update_parent_form.css";

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        currentUser: state.session.user,
        formType: "Update Parent",
        parentId: state.session.user.id,
        updateParent: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: payload => dispatch(updateUser(payload)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateParentForm);
