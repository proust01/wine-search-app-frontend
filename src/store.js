import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
});

const store = createStore(
  reducer,
  {},
  compose(applyMiddleware(thunk))
);

export default store;
