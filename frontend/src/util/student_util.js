import axios from "axios";

export const getStudent = id => {
  return axios.get(`/api/students/${id}`);
};

export const getAllStudents = () => {
  return axios.get("/api/students");
};

export const createStudent = data => {
  return axios.post("/api/students", data);
};

export const deleteStudent = id => {
  return axios.delete(`/api/students/${id}`);
};

export const updateStudent = data => {
  return axios.put(`/api/students/edit/${data.id}`, data);
};