import {
  RECEIVE_ALL_USERS
} from "../actions/user_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      // for (let index = 0; index < action.users.data.length; index++) {
      //   let user = action.users.data[index];
      //   newState[user._id] = user;
      // }
      return Object.assign({}, newState, action.users.data)
      
    default:
      return state;
  }
};

export default UsersReducer;
