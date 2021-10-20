import { GET_USER, LOG_OUT, SET_EMAIL, SET_USERNAME } from "../types";

export const getProfile = (user) => async (dispatch) => {
  const cognito = { ...user.attributes, username: user.username };
  const token = user.signInUserSession.accessToken.jwtToken;
  dispatch({
    type: GET_USER,
    payload: { cognito, token },
  });

  dispatch({
    type: SET_USERNAME,
    payload: cognito.username,
  });

  dispatch({
    type: SET_EMAIL,
    payload: cognito.email,
  });
};

export const setEmail = (email) => async (dispatch) => {
  dispatch({
    type: SET_EMAIL,
    payload: email,
  });
};

export const setUsername = (username) => async (dispatch) => {
  dispatch({
    type: SET_USERNAME,
    payload: username,
  });
};

export const logOut = () => async (dispatch) => {
  const profile = {};
  const token = {};
  dispatch({
    type: LOG_OUT,
    payload: { profile, token },
  });
};
