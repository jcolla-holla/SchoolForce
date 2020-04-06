import { connect } from "react-redux";
import { fetchAllReminders } from "../../actions/reminder_actions";
import { fetchAllUsers } from '../../actions/user_actions.js';
import { withRouter } from "react-router-dom";
import ReminderIndex from "./reminder_index";

const mapStateToProps = state => {
  let reminders;
  if (state.entities.reminders.reminders === undefined) {
    reminders = [];
  } else {
    reminders = state.entities.reminders.reminders;
  }

  let users;
  if (Object.values(state.entities.users).length === 0) {
    users = [];
  } else {
    users = Object.values(state.entities.users);
  }

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
    reminders: reminders,
    users: users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllReminders: () => dispatch(fetchAllReminders()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReminderIndex)
);