import React from "react";
import contexts from "../contexts";

export default () => {
  const context = React.useContext(contexts.CategoriesContext);

  // force hook to be used within categories provider provider
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
};
