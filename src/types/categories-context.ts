import CategoryMap from "./category-map";
import ParentMap from "./parent-map";

export default interface CategoriesContext {
    categoryMap: CategoryMap | null;
    parentMap: ParentMap | null;
    rootId: string | null;
}