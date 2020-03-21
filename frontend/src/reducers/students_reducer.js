import {
  RECEIVE_STUDENT,
  RECEIVE_ALL_STUDENTS,
  REMOVE_STUDENT
} from "../actions/student_actions";

const StudentsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      return Object.assign({}, state, action.students.data)

    case RECEIVE_STUDENT:
      newState.students = action.student.data;
      return newState;

    case REMOVE_STUDENT:
      return Object.values(newState).filter(val => val._id !== action.studentId);

    // case UPDATE_STUDENT: 
    //   return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)

    default:
      return state;
  }
};

export default StudentsReducer;
