import { combineReducers } from "redux";
import selectedCategories from "./selected-categories";
import categoryStatus from "./category-status";

const rootReducer = combineReducers({
  selectedCategories,
  categoryStatus,
});

export default rootReducer;
