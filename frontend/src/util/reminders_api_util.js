import axios from "axios";

export const getReminder = id => {
  return axios.get(`/api/reminders/${id}`);
};

export const getAllReminders = () => {
  return axios.get("/api/reminders");
};

export const createReminder = data => {
  return axios.post("/api/reminders/new", data);

};