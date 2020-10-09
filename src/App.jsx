import React from "react";
import services from "./services";
import factory from "./factories";
import CategoryItemList from "./components/category-item-list";

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [rootId, setRootId] = React.useState(null);
  const [categoryMap, setCategoryMap] = React.useState({});
  const [parentMap, setParentMap] = React.useState({});

  React.useEffect(() => {

   const getCategories = async ()=> {
     const {categories, rootId} = await services.getCategories();
     const {categoryMap, parentMap} = factory.generateCategoryMaps(categories);
     setRootId(rootId);
     setCategoryMap(categoryMap);
     setParentMap(parentMap);
     setIsLoading(false);
   }

   getCategories();
  }, [])

  return <div>
    <h1>Otrium Challenge</h1>
    {
      isLoading ? "Loading . . ." :
          (<div>
            <CategoryItemList parentMap={parentMap} categories={parentMap[rootId]} categoryMap={categoryMap}/>
          </div>)
    }
  </div>
};
