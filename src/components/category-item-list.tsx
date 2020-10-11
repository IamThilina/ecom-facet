import * as React from "react";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { useCategories } from "../hooks";
import CategoryItem from "./category-item";
import { CategoriesContext } from "../types";
import actionTypes from "../action-types";


interface Props {
  categoryIds: Array<string>;
}

const CategoryItemList: React.FunctionComponent<Props> = ({ categoryIds }) => {
  const dispatch = useDispatch();
  const { categoryMap }: CategoriesContext = useCategories();
  const [checked, setChecked] = React.useState(false);

  const categories = React.useMemo(() => categoryIds.map((categoryId) => categoryMap![categoryId]), [
    categoryIds,
    categoryMap,
  ]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked(true);
      dispatch({ type: actionTypes.SELECT_ALL_SUB_CATEGORY, payload: categories });
    } else {
      setChecked(false);
      dispatch({ type: actionTypes.REMOVE_ALL_SUB_CATEGORY, payload: categories });
    }
  };

  return (
    <div className="category-item-list">
      {categoryIds && (
        <>
          <div className="category-item-list__switch-container">
            <Switch
              className="category-item-list__select-all-switch"
              checked={checked}
              color="default"
              onChange={handleChange}
              size="small"
            />
            Select All
          </div>
          {categoryIds.map((categoryId) => {
            const { name, count } = categoryMap![categoryId];
            return <CategoryItem key={categoryId} id={categoryId} name={name} count={count} />;
          })}
        </>
      )}
    </div>
  );
};
export default CategoryItemList;
