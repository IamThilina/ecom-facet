import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCircleRounded, RemoveCircleRounded } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import { ChangeEvent } from "react";
import { useCategories } from "../hooks";
import CategoryItemList from "./category-item-list";
import { Store, CategoriesContext } from "../types";

interface Props {
  id: string;
  name: string;
  count: number;
}

const CategoryItem: React.FunctionComponent<Props> = ({ id, count, name }) => {
  const { parentMap }: CategoriesContext = useCategories();
  const categoryStatus = useSelector(({ categoryStatus: status }: Store) => status);
  const dispatch = useDispatch();
  const [toggled, setToggled] = React.useState<boolean>(false);

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setToggled(!toggled);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch({ type: "ADD", payload: { name, id } });
    } else {
      dispatch({ type: "REMOVE", payload: { name, id } });
    }
  };

  return (
    <div style={{ margin: "5px" }}>
      {parentMap![id] && toggled && <RemoveCircleRounded color="action" onClick={onClick} />}
      {parentMap![id] && !toggled && <AddCircleRounded color="action" onClick={onClick} />}
      <Checkbox checked={!!categoryStatus![id]} onChange={handleChange} color="default" />
      {`${name} (${count})`}
      {toggled && <CategoryItemList categoryIds={parentMap![id]} />}
    </div>
  );
};
export default CategoryItem;
