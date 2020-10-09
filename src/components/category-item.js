import * as React from "react";
import { AddCircleRounded, RemoveCircleRounded } from "@material-ui/icons"
import CategoryItemList from "./category-item-list";

const CategoryItem = ({id, parent, count, name, categoryMap, parentMap}) => {
    const [toggled, setToggled] = React.useState(false);
    const onClick = (event) => {
        event.stopPropagation();
        setToggled(!toggled);
    }
    return <div onClick={onClick} style={{margin: "5px"}}>
        {
            parentMap[id] ? toggled ? <RemoveCircleRounded color="action"/> : <AddCircleRounded color="action"/> : null
        }

        {`${name} (${count})`}
        {
            toggled && <CategoryItemList categoryMap={categoryMap} categories={parentMap[id]} parentMap={parentMap}/>
        }
    </div>;
};
export default CategoryItem;