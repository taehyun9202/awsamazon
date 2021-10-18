import { SET_OPEN_MODAL } from "../types";

const initialState = {
  modals: {
    menu: false,
    cart: false,
    profile: false,
  },
};

export const utilReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_MODAL:
      return {
        ...state,
        modals: { ...state.modals, ...action.payload },
      };
    default:
      return state;
  }
};
