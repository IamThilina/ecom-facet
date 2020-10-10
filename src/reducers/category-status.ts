import { CategoryStatus, SelectedCategory, Action, SelectedCategories } from "../types";

const initialState: CategoryStatus = {};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        [payload.id]: true,
      };
    case "REMOVE":
      return {
        ...state,
        [payload.id]: false,
      };
    case "REMOVE_ALL":
      return initialState;
    case "SELECT_ALL_SUB_CATEGORY":
      return selectAllAubCategory(state, payload);
    case "REMOVE_ALL_SUB_CATEGORY":
      return payload.reduce((newStatus, category) => ({ ...state, [category.id]: false }));
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
