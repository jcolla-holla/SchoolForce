import {
  RECEIVE_STUDENT,
  RECEIVE_ALL_STUDENTS,
  REMOVE_STUDENT,
  RECEIVE_PARENT,
  RECEIVE_STATUS,
  CLEAR_STATUS
} from "../actions/student_actions";

const StudentsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      return Object.assign({}, newState, action.students.data)

    case RECEIVE_STUDENT:
      newState.students = action.student.data; //to create but need to figure out how to change update
      return newState;

    case REMOVE_STUDENT:
      return Object.values(newState).filter(val => val._id !== action.studentId);

    case RECEIVE_PARENT:
      // newState.students = action.student.data;
      return newState;

    case RECEIVE_STATUS:
      newState.status = action.status;
      return newState;

    case CLEAR_STATUS:
      newState.status = 0;
      return newState;

    default:
      return state;
  }
};

export default StudentsReducer;
