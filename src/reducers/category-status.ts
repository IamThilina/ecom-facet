import { CategoryStatus, SelectedCategory, Action, SelectedCategories } from "../types";
import actionTypes from "../action-types";

const initialState: CategoryStatus = {};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case actionTypes.ADD:
      return {
        ...state,
        [payload.id]: true,
      };
    case actionTypes.REMOVE:
      return {
        ...state,
        [payload.id]: false,
      };
    case actionTypes.REMOVE_ALL:
      return initialState;
    case actionTypes.SELECT_ALL_SUB_CATEGORY:
      return selectAllAubCategory(state, payload);
    case actionTypes.REMOVE_ALL_SUB_CATEGORY:
      return payload.reduce(
        (newStatus: CategoryStatus, category: SelectedCategory) => ({ ...newStatus, [category.id]: false }),
        state,
      );
    default:
      return state;
  }
};

const selectAllAubCategory = (state: CategoryStatus, payload: SelectedCategories) => {
  const subCategoryStatus = payload.reduce(
    (status: CategoryStatus, category: SelectedCategory) => ({
      ...status,
      [category.id]: true,
    }),
    {},
  );
  return {
    ...state,
    ...subCategoryStatus,
  };
};
