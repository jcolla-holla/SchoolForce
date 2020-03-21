import axios from "axios";

export const getReminder = id => {
  return axios.get(`/api/reminders/${id}`)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const getAllReminders = () => {
  return axios.get("/api/reminders")
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};

export const createReminder = data => {
  return axios.post("/api/reminders/new", data)
    .then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
};