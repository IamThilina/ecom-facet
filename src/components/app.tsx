import React from "react";
import {useCategories} from "../hooks";
import CategoryItemList from "./category-item-list";
import SelectedCategories from "./selected-categories";

export default () => {
 const {rootId, categoryMap, parentMap} = useCategories();

  return (rootId !== null && parentMap && categoryMap && (<div>
      <h1>Otrium Challenge</h1>
      <SelectedCategories />
      <div>
        <CategoryItemList categoryIds={parentMap[rootId]}/>
      </div>
    </div>));

};
