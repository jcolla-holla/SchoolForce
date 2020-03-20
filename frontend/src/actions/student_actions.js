import * as APIUtil from "../util/student_util";

export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const RECEIVE_ALL_STUDENTS = "RECEIVE_ALL_STUDENTS";
export const RECEIVE_NEW_STUDENT = "RECEIVE_NEW_STUDENT";

export const receiveStudent = student => {
  return {
  type: RECEIVE_STUDENT,
  student
}};

export const receiveAllStudents = students => ({
  type: RECEIVE_ALL_STUDENTS,
  students
});

export const fetchStudent = (id) => dispatch => (
  APIUtil.getStudent(id)
    .then(student => dispatch(receiveStudent(student)))
    .catch(err => console.log(err))
);

export const fetchAllStudents = () => dispatch => (
  APIUtil.getAllStudents()
    .then(students => dispatch(receiveAllStudents(students)))
    .catch(err => console.log(err))
);

export const createNewStudent = data => (dispatch) => {
  return APIUtil.createStudent(data)
    .then(student => dispatch(receiveStudent(student)))

    .catch(err => console.log(err))
};