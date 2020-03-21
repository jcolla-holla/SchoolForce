import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";

import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

import { createNewStudent } from "./actions/student_actions";
import { createReminder } from "./actions/reminder_actions";
import { signup } from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser }
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById("root");

  //putting these on window to test
  window.store = store;
  window.logout = () => store.dispatch(logout());

  window.createNewStudent = data => store.dispatch(createNewStudent(data));
  window.createReminder = data => store.dispatch(createReminder(data));
  window.signup = user => store.dispatch(signup(user));


  ReactDOM.render(<Root store={store} />, root);
});

