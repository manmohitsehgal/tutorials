import heroReducer from "./heroReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  hero: heroReducer
});
