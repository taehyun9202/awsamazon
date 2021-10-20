import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { homeReducer } from "./homeReducer";
import { utilReducer } from "./utilReducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  profile: profileReducer,
  util: utilReducer,
  home: homeReducer,
  product: productReducer,
});
