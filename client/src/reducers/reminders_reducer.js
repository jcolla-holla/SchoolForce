import { RECEIVE_ALL_REMINDERS, RECEIVE_REMINDER } from "../actions/reminder_actions";

const RemindersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_REMINDERS:
      newState.reminders = action.reminders.data;
      return newState;
    case RECEIVE_REMINDER:
      newState.reminders = action.reminder.data;
      return newState;
    default:
      return state;
  }
};

export default RemindersReducer;
