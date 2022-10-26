import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
