import { combineReducers } from "redux";
import Auth from "./App/index";
import User from "./User/index";
export const rootReducer = combineReducers({ Auth, User });
