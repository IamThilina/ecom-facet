import React from "react";
import contexts from "../contexts"
import services from "../services";
import factory from "../factories";
import {CategoryMap, ParentMap} from "../types";

interface Props {
    children: React.ReactNode
}

const CategoriesProvider: React.FunctionComponent<Props> = ({children}) => {
    const { CategoriesContext } = contexts;
    const [rootId, setRootId] = React.useState<string|null>(null);
    const [categoryMap, setCategoryMap] = React.useState<CategoryMap|null>(null);
    const [parentMap, setParentMap] = React.useState<ParentMap|null>(null);

    React.useEffect(() => {
        const getCategories = async ()=> {
            const {categories, rootId} = await services.getCategories();
            const {categoryMap, parentMap} = factory.generateCategoryMaps(categories);
            setRootId(rootId);
            setCategoryMap(categoryMap);
            setParentMap(parentMap);
        }

        getCategories();
    }, []);

    return <CategoriesContext.Provider value={{ categoryMap, parentMap, rootId }}>{children}</CategoriesContext.Provider>;
}
export default CategoriesProvider;