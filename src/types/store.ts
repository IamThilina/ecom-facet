import type CategoryStatus from "./category-status"
import type SelectedCategories from "./selected-categories";

export default interface Store {
    categoryStatus:  CategoryStatus;
    selectedCategories: SelectedCategories
}