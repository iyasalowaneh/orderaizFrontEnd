import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { checkForToken } from "./actions/authActions";
import { fetchItems } from "./actions/itemActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(checkForToken());
store.dispatch(fetchItems());

export default store;
