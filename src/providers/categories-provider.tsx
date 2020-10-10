import React from "react";
import contexts from "../contexts"
import services from "../services";
import factory from "../factories";

export default ({children}) => {
    const { CategoriesContext } = contexts;
    const [rootId, setRootId] = React.useState(null);
    const [categoryMap, setCategoryMap] = React.useState(null);
    const [parentMap, setParentMap] = React.useState(null);

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