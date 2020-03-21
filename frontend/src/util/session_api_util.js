import axios from "axios";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = userData => {
  return axios.post("/api/users/register", userData)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const login = userData => {
  return axios.post("/api/users/login", userData)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};