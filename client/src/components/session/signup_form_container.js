import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form.jsx";

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
