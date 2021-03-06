import * as APIUtil from "../util/student_util";

export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const RECEIVE_ALL_STUDENTS = "RECEIVE_ALL_STUDENTS";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const RECEIVE_PARENT = "RECEIVE_PARENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_STATUS = "RECEIVE_STATUS";
export const CLEAR_STATUS = "CLEAR_STATUS";


export const receiveAllStudents = (students) => ({
  type: RECEIVE_ALL_STUDENTS,
  students
});

export const receiveStudent = (student) => {
  return {
    type: RECEIVE_STUDENT,
    student
  }
};

export const removeStudent = (studentId) => {
  return {
    type: REMOVE_STUDENT,
    studentId
  }
};

export const receiveParent = (parentId) => {
  return {
    type: RECEIVE_PARENT,
    parentId
  }
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveStatus = status => ({
  type: RECEIVE_STATUS,
  status
});

export const clearStatus = () => ({
  type: CLEAR_STATUS
});



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
    .then(student => dispatch(receiveStudent(student)),
        err => dispatch(receiveErrors(err.response.data)))
    .then(res => {
      if (res.type === "RECEIVE_STUDENT") {
        dispatch(receiveStatus(res.student.status))
      }
    })
);

export const deleteStudent = (studentId) => dispatch => (
  APIUtil.deleteStudent(studentId)
    .then(() => dispatch(removeStudent(studentId)))
    .catch(err => console.log(err))
);

export const updateStudent = (data) => dispatch => (
  APIUtil.updateStudent(data)
);

export const fetchParent = (parentId) => dispatch => (
  APIUtil.getParent(parentId)
    .then(parent => dispatch(receiveParent(parent)))
    .catch(err => console.log(err))
);