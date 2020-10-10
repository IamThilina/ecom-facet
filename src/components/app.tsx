import React from "react";
import { useCategories } from "../hooks";
import CategoryItemList from "./category-item-list";
import SelectedCategories from "./selected-categories";

const App: React.FunctionComponent = () => {
  const { rootId, categoryMap, parentMap } = useCategories();

  return (
    (rootId !== null && parentMap && categoryMap && (
      <div className="facet-panel">
        <h1>Otrium Challenge</h1>
        <SelectedCategories />
        <div>
          <CategoryItemList categoryIds={parentMap![rootId!]} />
        </div>
      </div>
    )) ||
    null
  );
};

export default App;
