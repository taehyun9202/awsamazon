import { SET_OPEN_MODAL } from "../types";

export const setModalOpen = (modal, type) => async (dispatch) => {
  dispatch({
    type: SET_OPEN_MODAL,
    payload: { [modal]: type },
  });
};
