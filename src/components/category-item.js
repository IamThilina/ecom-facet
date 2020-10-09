import * as React from "react";
import CategoryItemList from "./category-item-list";

const CategoryItem = ({id, parent, count, name, categoryMap, parentMap}) => {
    const [toggled, setToggled] = React.useState(false);
    const onClick = (event) => {
        event.stopPropagation();
        setToggled(!toggled);
    }
    return <div onClick={onClick} style={{margin: "5px"}}>
        {`${name} (${count})`}
        {
            toggled && <CategoryItemList categoryMap={categoryMap} categories={parentMap[id]} parentMap={parentMap}/>
        }
    </div>;
};
export default CategoryItem;