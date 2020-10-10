import CategoryMap from './category-map';
import ParentMap from './parent-map';

interface CategoriesContext {
    categoryMap: CategoryMap | null;
    parentMap: ParentMap | null;
    rootId: string | null;
}

export default CategoriesContext;
