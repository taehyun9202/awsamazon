import { API } from "aws-amplify";
import { GET_PRODCUTS } from "../types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await API.get("amzproductapi", "/product", {});

    dispatch({
      type: GET_PRODCUTS,
      payload: res.body,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProductPriceRange = (product) =>
  product.priceRange
    ? `$${product.priceRange[0]} - $${product.priceRange[1]}`
    : `$${product.price}`;

export const calculateDiscount = (product) =>
  product.priceRange
    ? `$${(
        parseFloat(product.priceRange[0]) *
        (product.discount && (100 - product.discount) / 100)
      ).toFixed(2)} - $${(
        parseFloat(product.priceRange[1]) *
        (product.discount && (100 - product.discount) / 100)
      ).toFixed(2)}`
    : `$${(
        parseFloat(product.price) *
        (product.discount && (100 - product.discount) / 100)
      ).toFixed(2)}`;

export const getProductImage = (product) =>
  product.image
    ? product.image[0]
    : product.variation.color[Object.keys(product.variation.color)[0]].image[0];
