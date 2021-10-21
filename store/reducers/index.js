import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { utilReducer } from "./utilReducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  profile: profileReducer,
  util: utilReducer,
  product: productReducer,
});
