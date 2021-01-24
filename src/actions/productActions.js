import Axios from "axios";

const {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
} = require("../constants/productConstants");

export const listProducts = () => async (dispatch) => {
  try {
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    const year = await Axios.get(`/api/breakdown/year/${productId}`);
    const variety = await Axios.get(`/api/breakdown/variety/${productId}`);
    const region = await Axios.get(`/api/breakdown/region/${productId}`);
    const yearVariety = await Axios.get(
      `/api/breakdown/year-variety/${productId}`
    );
    const data = [year.data, variety.data, region.data, yearVariety.data];
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProduct = (product) => async (dispatch) => {
  dispatch({ type: PRODUCT_CREATE_REQUEST });
  try {
    const { data } = await Axios.post("/api/products", product);
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_CREATE_FAIL, payload: message });
  }
};
export const updateProduct = (product) => async (dispatch) => {
  dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });

  try {
    const { data } = await Axios.put(`/api/products/${product._id}`, product);
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, error: message });
  }
};
