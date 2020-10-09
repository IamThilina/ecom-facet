import * as React from "react";
import { AddCircleRounded, RemoveCircleRounded } from "@material-ui/icons"
import {useCategories} from "../hooks";
import CategoryItemList from "./category-item-list";

const CategoryItem = ({id, count, name}) => {
    const {parentMap} = useCategories();
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
            toggled && <CategoryItemList categories={parentMap[id]}/>
        }
    </div>;
};
export default CategoryItem;