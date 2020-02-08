import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const actionsLogger = ({ getState }) => next => action => {
  console.log("Dispatching this type of action: ", action);
  console.log("Current State: ", getState());
  next(action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, actionsLogger))
);

export default store;
