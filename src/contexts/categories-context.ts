import React from "react";
import { CategoriesContext } from "../types";

export default React.createContext<CategoriesContext>({
  categoryMap: null,
  parentMap: null,
  rootId: null,
});
