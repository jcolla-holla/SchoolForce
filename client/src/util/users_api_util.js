import axios from "axios";

export const getAllUsers = () => {
  return axios.get("/api/users");
};

export const getUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};
