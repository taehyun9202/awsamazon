import {
  GET_USER,
  LOG_OUT,
  SET_EMAIL,
  SET_USERNAME,
  UPDATE_CART,
} from "../types";

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

export const updateCart = (cart) => async (dispatch) => {
  dispatch({
    type: UPDATE_CART,
    payload: cart,
  });
};

export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
};
