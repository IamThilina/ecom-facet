import React from "react";
import { useCategories } from "../hooks";
import CategoryItemList from "./category-item-list";
import SelectedCategories from "./selected-categories";

const App: React.FunctionComponent = () => {
  const { rootId, categoryMap, parentMap } = useCategories();

  return (
    (rootId !== null && parentMap && categoryMap && (
      <div className="facet-panel">
        <h1 className="facet-panel__title">Otrium Facet Panel</h1>
        <SelectedCategories />
        <CategoryItemList categoryIds={parentMap![rootId!]} />
      </div>
    )) ||
    null
  );
};

export default App;
