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
    reminders = Object.values(state.entities.reminders.reminders);
  }

  let users;
  if (Object.values(state.entities.users).length === 0) {
    users = [];
  } else {
    users = Object.values(state.entities.users);
  }
  
  let currentUser;
  if (Object.values(state.entities.users).length === 0) {
    currentUser = [Object.assign(state.session.user, { _id: state.session.user.id })];
  } else {

    let updatedUser = [];

    for (let i = 0; i < users.length; i++) {
      let idCheck = users[i]._id

      if (updatedUser.length === 1) { break } {
        if (state.session.user.id === idCheck) {
          updatedUser.push(users[i])
        } 
      } 
    }

      if (updatedUser.length === 0) {
        updatedUser.push(Object.assign(state.session.user, { _id: state.session.user.id }))
      }
    
    currentUser = updatedUser;
  }
  
  return {
    currentUser: currentUser,
    reminders: reminders,
    users: users
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllReminders: () => dispatch(fetchAllReminders()),
  fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReminderIndex)
);