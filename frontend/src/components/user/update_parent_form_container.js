import { connect } from "react-redux";
import { updateUser, fetchAllUsers } from "../../actions/user_actions";
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
        updateParent: Object.values(state.entities.users)
          .filter(val => val._id === state.session.user.id)
    };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: payload => dispatch(updateUser(payload)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateParentForm);
