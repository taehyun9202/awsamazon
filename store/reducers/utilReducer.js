import { CLEAR_NOTIFICATION, PUT_NOTIFICATION, SET_OPEN_MODAL } from "../types";

const initialState = {
  modals: {
    menu: false,
    cart: false,
    profile: false,
    notification: false,
  },
  notification: {
    type: "",
    icon: null,
    message: "",
    product: null,
  },
};

export const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_MODAL:
      return {
        ...state,
        modals: { ...state.modals, ...action.payload },
      };
    case PUT_NOTIFICATION:
    case CLEAR_NOTIFICATION:
      return {
        ...state,
        notification: action.payload.notification,
      };
    default:
      return state;
  }
};
