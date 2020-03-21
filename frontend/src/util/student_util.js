import axios from "axios";

export const getStudent = id => {
  return axios.get(`/api/students/${id}`)
      .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const getAllStudents = () => {
  return axios.get("/api/students")
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const createStudent = data => {
  return axios.post("/api/students", data)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const deleteStudent = id => {
  return axios.delete(`/api/students/${id}`)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const updateStudent = data => {
  console.log(data)
  return axios.put(`/api/students/edit/${data.id}`, data)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};