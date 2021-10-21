import { CLEAR_NOTIFICATION, PUT_NOTIFICATION, SET_OPEN_MODAL } from "../types";

export const setModalOpen = (modal, type) => async (dispatch) => {
  dispatch({
    type: SET_OPEN_MODAL,
    payload: { [modal]: type },
  });
};

export const putNotification =
  (type, icon, message, product) => async (dispatch) => {
    console.log(type, icon, message, product);
    const notification = {
      type: type,
      icon: icon,
      message: message,
      product: product,
    };
    dispatch({
      type: PUT_NOTIFICATION,
      payload: { notification },
    });
  };

export const clearNotification = () => async (dispatch) => {
  const notification = { type: "", icon: null, message: "", product: null };
  dispatch({
    type: CLEAR_NOTIFICATION,
    payload: { notification },
  });
};
