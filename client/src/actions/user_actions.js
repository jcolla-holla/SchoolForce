import * as APIUtil from "../util/users_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

// const removeUser = userId => {
//   return {
//     type: REMOVE_USER,
//     userId
//   };
// };

export const fetchAllUsers = () => dispatch =>
  APIUtil.getAllUsers()
    .then(users => dispatch(receiveAllUsers(users)))
    .catch(err => console.log(err));

// export const fetchAllUsers = () => dispatch => {
//   return APIUtil.getAllUsers().then(users =>
//     dispatch(receiveAllUsers(users))
//   );
// };

export const fetchUser = userId => dispatch => {
  return APIUtil.getUser(userId)
    .then(user => dispatch(receiveUser(user)));
};

// export const deleteUser = userId => dispatch => {
//   return APIUtil.deleteUser(userId).then(() =>
//     dispatch(removeUser(userId))
//   );
// };
