import {
  RECEIVE_ALL_USERS
} from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      let newState = {};
      for (let index = 0; index < action.users.data.length; index++) {
        let user = action.users.data[index];
        newState[user._id] = user;
      }
      return Object.assign({}, state, newState)
    default:
      return state;
  }
};

export default UsersReducer;
