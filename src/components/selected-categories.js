import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const SelectedCategories = () => {
    const selectedCategories = useSelector(({selectedCategories}) => selectedCategories);
    const dispatch = useDispatch();

    return <div>
        <h3> Selected Categories</h3>
        {
            selectedCategories.length > 0 ? <React.Fragment>
                {selectedCategories.map((category) => <Chip label={category.name} onDelete={()=>dispatch({type: "REMOVE", payload: {...category}})}/>)}
                <Button
                    size="small"
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    style={{marginLeft: "10px"}}
                    onClick={()=>dispatch({type: "REMOVE_ALL"})}
                >
                    Remove All
                </Button>
            </React.Fragment> : "No Categories Selected"
        }
    </div>

};

export default SelectedCategories;