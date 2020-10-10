import React from 'react';
import contexts from '../contexts';
import services from '../services';
import factory from '../factories';
import { CategoryMap, ParentMap } from '../types';

interface Props {
    children: React.ReactNode
}

const CategoriesProvider: React.FunctionComponent<Props> = ({ children }) => {
  const { CategoriesContext } = contexts;
  const [rootId, setRootId] = React.useState<string|null>(null);
  const [categoryMap, setCategoryMap] = React.useState<CategoryMap|null>(null);
  const [parentMap, setParentMap] = React.useState<ParentMap|null>(null);

  React.useEffect(() => {
    const getCategories = async () => {
      const { categories, rootId: id } = await services.getCategories();
      const generatedMaps = factory.generateCategoryMaps(categories);
      setRootId(id);
      setCategoryMap(generatedMaps.categoryMap);
      setParentMap(generatedMaps.parentMap);
    };

    getCategories();
  }, []);

  // eslint-disable-next-line max-len
  return <CategoriesContext.Provider value={{ categoryMap, parentMap, rootId }}>{children}</CategoriesContext.Provider>;
};
export default CategoriesProvider;
