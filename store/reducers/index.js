import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { homeReducer } from "./homeReducer";
import { utilReducer } from "./utilReducer";

export default combineReducers({
  profile: profileReducer,
  util: utilReducer,
  home: homeReducer,
});
