import * as APIUtil from "../util/student_util";

export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const RECEIVE_ALL_STUDENTS = "RECEIVE_ALL_STUDENTS";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const RECEIVE_PARENT = "RECEIVE_PARENT";


export const receiveAllStudents = (students) => ({
  type: RECEIVE_ALL_STUDENTS,
  students
});

export const receiveStudent = (student) => {
  return {
  type: RECEIVE_STUDENT,
  student
}};

export const removeStudent = (studentId) => {
  return {
    type: REMOVE_STUDENT,
    studentId
}};

export const receiveParent = (parentId) => {
  return {
    type: RECEIVE_PARENT,
    parentId
  }
};


export const fetchAllStudents = () => dispatch => (
  APIUtil.getAllStudents()
    .then(students => dispatch(receiveAllStudents(students)))
    .catch(err => console.log(err))
);

export const fetchStudent = (id) => dispatch => (
  APIUtil.getStudent(id)
    .then(student => dispatch(receiveStudent(student)))
    .catch(err => console.log(err))
);

export const createNewStudent = (data) => dispatch => (
  APIUtil.createStudent(data)
    .then(student => dispatch(receiveStudent(student)))
    .catch(err => console.log(err))
);

export const deleteStudent = (studentId) => dispatch => (
  APIUtil.deleteStudent(studentId)
    .then(() => dispatch(removeStudent(studentId)))
    .catch(err => console.log(err))
);

export const updateStudent = (data) => dispatch => (
  APIUtil.updateStudent(data)
    .then(student => dispatch(receiveStudent(student)))
    .catch(err => console.log(err))
);

export const fetchParent = (parentId) => dispatch => (
  APIUtil.getParent(parentId)
    .then(parent => dispatch(receiveParent(parent)))
    .catch(err => console.log(err))
);
