import * as React from "react";
import CategoryItem from "./category-item";

const CategoryItemList = ({ parentMap, categoryMap, categories }) => {
    return <div style={{marginLeft: '30px'}}>
        {
            categories && categories.map((categoryId) => {
                const {parent, name, count} = categoryMap[categoryId]
                return <CategoryItem key={categoryId} id={categoryId} name={name} count={count} parent={parent} categoryMap={categoryMap} parentMap={parentMap}/>
            })
        }
    </div>
};
export default CategoryItemList;