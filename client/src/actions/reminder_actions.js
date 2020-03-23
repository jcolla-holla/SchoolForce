import * as APIUtil from "../util/reminders_api_util";

export const RECEIVE_ALL_REMINDERS = "RECEIVE_ALL_REMINDERS";
export const RECEIVE_REMINDER = "RECEIVE_REMINDER";

export const receiveAllReminders = reminders => ({
  type: RECEIVE_ALL_REMINDERS,
  reminders
});

export const receiveReminder = reminder => {
  return {
    type: RECEIVE_REMINDER,
    reminder
  };
};

export const createReminder = data => dispatch => {
  return APIUtil.createReminder(data)
    .then(reminder => dispatch(receiveReminder(reminder)))
    .catch(err => console.log(err));
};

export const fetchAllReminders = () => dispatch =>
  APIUtil.getAllReminders()
    .then(reminders => dispatch(receiveAllReminders(reminders)))
    .catch(err => console.log(err));
