import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { homeReducer } from "./homeReducer";

export default combineReducers({
  profile: profileReducer,
  home: homeReducer,
});
