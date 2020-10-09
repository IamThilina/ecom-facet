import * as React from "react";
import {useSelector, useDispatch} from 'react-redux'
import Chip from "@material-ui/core/Chip";

const SelectedCategories = () => {
    const selectedCategories = useSelector(({selectedCategories}) => selectedCategories);
    const dispatch = useDispatch();

    return <div>
        <h3> Selected Categories</h3>
        {
            selectedCategories.map((category) => <Chip label={category.name} onDelete={()=>dispatch({type: "REMOVE", payload: {...category}})}/>)
        }
    </div>

};

export default SelectedCategories;