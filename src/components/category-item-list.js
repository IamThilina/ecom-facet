import * as React from "react";
import {useCategories} from "../hooks";
import CategoryItem from "./category-item";

const CategoryItemList = ({ categories }) => {
    const {categoryMap} = useCategories();

    return <div style={{marginLeft: '30px'}}>
        {
            categories && categories.map((categoryId) => {
                const {parent, name, count} = categoryMap[categoryId]
                return <CategoryItem key={categoryId} id={categoryId} name={name} count={count}/>
            })
        }
    </div>
};
export default CategoryItemList;