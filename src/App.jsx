import React from "react";
import {useCategories} from "./hooks";
import CategoryItemList from "./components/category-item-list";

export default () => {
 const {rootId, categoryMap, parentMap} = useCategories();

  return (rootId !== null && parentMap && categoryMap && (<div>
      <h1>Otrium Challenge</h1>
      <div>
        <CategoryItemList categories={parentMap[rootId]}/>
      </div>
    </div>));

};
