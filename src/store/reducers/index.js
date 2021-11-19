import { combineReducers } from "redux";
import authReduser from "./authReducer";
import itemReducer from "./itemReducer";
const rootReducer = combineReducers({
  user: authReduser,
  items: itemReducer,
});
export default rootReducer;
