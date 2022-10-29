import { combineReducers } from "redux";
import { AddToCartReducer, GetProductReducer } from "./productReducer";

const combineReducer = combineReducers({
  GetProductReducer: GetProductReducer,
  AddToCartReducer: AddToCartReducer,
});
export default combineReducer;
