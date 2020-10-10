import * as React from "react";
import Switch from "@material-ui/core/Switch";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { useCategories } from "../hooks";
import CategoryItem from "./category-item";
import { CategoriesContext } from "../types";

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
    setChecked(!checked);
    if (event.target.checked) {
      dispatch({ type: "SELECT_ALL_SUB_CATEGORY", payload: categories });
    } else {
      dispatch({ type: "REMOVE_ALL_SUB_CATEGORY", payload: categories });
    }
  };

  return (
    <div style={{ marginLeft: "30px", marginTop: "10px" }}>
      {categoryIds && (
        <>
          <Switch checked={checked} color="default" onChange={handleChange} size="small" />
          Select All
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
