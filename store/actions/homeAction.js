import { PUT_LINK, PUT_SEARCH, GET_USERS, GET_ALLPOSTS } from "../types";

export const getUsers = (users) => async (dispatch) => {
  dispatch({
    type: GET_USERS,
    payload: { users },
  });
};
