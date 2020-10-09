import * as React from "react";
import {useSelector} from 'react-redux'
import Chip from "@material-ui/core/Chip";

const SelectedCategories = () => {
    const selectedCategories = useSelector(({selectedCategories}) => selectedCategories);

    return <div>
        <h3> Selected Categories</h3>
        {
            selectedCategories.map((category) => <Chip label={category.name}/>)
        }
    </div>

};

export default SelectedCategories;