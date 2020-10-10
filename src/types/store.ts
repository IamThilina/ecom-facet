import type CategoryStatus from "./category-status";
import type SelectedCategories from "./selected-categories";

interface Store {
  categoryStatus: CategoryStatus;
  selectedCategories: SelectedCategories;
}

export default Store;
