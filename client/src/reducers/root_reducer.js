import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entities from "./entities_reducer";
import ModalReducer from './modal_reducer';


const RootReducer = combineReducers({
  entities,
  session,
  errors,
  modal: ModalReducer
});

export default RootReducer;