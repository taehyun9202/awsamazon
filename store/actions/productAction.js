import { API } from "aws-amplify";
import { GET_PRODCUTS } from "../types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await API.get("amzproductapi", "/product", {});
    console.log("products:", res.body);

    dispatch({
      type: GET_PRODCUTS,
      payload: res.body,
    });
  } catch (err) {
    console.log(err);
  }
};
