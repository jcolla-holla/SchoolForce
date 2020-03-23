import { combineReducers } from "redux";
import studentsReducer from "./students_reducer";
import usersReducer from "./users_reducer";
import remindersReducer from "./reminders_reducer";

const EntitiesReducer = combineReducers({
  students: studentsReducer,
  users: usersReducer,
  reminders: remindersReducer
});

export default EntitiesReducer;
