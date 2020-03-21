import * as APIUtil from "../util/student_util";

export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const RECEIVE_ALL_STUDENTS = "RECEIVE_ALL_STUDENTS";
export const REMOVE_STUDENT = "REMOVE_STUDENT";

export const receiveStudent = student => {
  return {
  type: RECEIVE_STUDENT,
  student
}};

export const receiveAllStudents = students => ({
  type: RECEIVE_ALL_STUDENTS,
  students
});


export const removeStudent = studentId => ({
  type: REMOVE_STUDENT,
  studentId
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

export const createNewStudent = (data) => (dispatch) => (
  APIUtil.createStudent(data)
    .then(student => dispatch(receiveStudent(student)))
    .catch(err => console.log(err))
)

export const deleteStudent = (id) => (dispatch) => (
  APIUtil.deleteStudent(id)
    .then((studentId) => dispatch(removeStudent(studentId)))
    .catch(err => console.log(err))
)

export const updateStudent = (data) => (dispatch) => (
  APIUtil.updateStudent(data)
    .then(student => dispatch(receiveStudent(student)))
    .catch(err => console.log(err))
)