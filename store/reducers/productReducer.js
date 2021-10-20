import { GET_PRODCUTS } from "../types";

const initialState = {
  products: [],
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODCUTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
