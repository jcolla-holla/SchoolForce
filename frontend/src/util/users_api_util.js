import axios from "axios";

export const getAllUsers = () => {
  return axios.get("/api/users");
};

export const getUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

export const updateUser = data => {
  return axios.post(`/api/users/edit/${data.id}`, data);
};

