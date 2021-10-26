import { GET_USER, LOG_OUT, SET_EMAIL, SET_USERNAME } from "../types";

const initialState = {
  cognito: {},
  token: "",
  email: "",
  username: "",
  loading: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        cognito: action.payload.cognito,
        token: action.payload.token,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
