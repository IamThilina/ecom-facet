import * as React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { AddCircleRounded, RemoveCircleRounded } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import {useCategories} from "../hooks";
import CategoryItemList from "./category-item-list";

const CategoryItem = ({id, count, name}) => {
    const {parentMap} = useCategories();
    const categoryStatus = useSelector(({categoryStatus}) => categoryStatus);
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);
    const [toggled, setToggled] = React.useState(false);

    const onClick = (event) => {
        event.stopPropagation();
        setToggled(!toggled);
    }

    const handleChange = (event) => {
        console.log(event.target.checked)
        if(event.target.checked) {
            dispatch({type: "ADD", payload: {name, id}});
        } else {
            dispatch({type: "REMOVE", payload: {name, id}});
        }
        setChecked(event.target.checked);
    };

    return <div style={{margin: "5px"}}>
        {
            parentMap[id] ? toggled ? <RemoveCircleRounded color="action" onClick={onClick}/> : <AddCircleRounded color="action" onClick={onClick}/> : null
        }
        <Checkbox
            checked={!!categoryStatus[id]}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {`${name} (${count})`}
        {
            toggled && <CategoryItemList categories={parentMap[id]}/>
        }
    </div>;
};
export default CategoryItem;