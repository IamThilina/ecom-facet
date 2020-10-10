import * as React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { AddCircleRounded, RemoveCircleRounded } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";
import {useCategories} from "../hooks";
import CategoryItemList from "./category-item-list";
import {Store, CategoriesContext} from "../types"
import {ChangeEvent} from "react";

interface Props {
    id: string;
    name: string;
    count: number
}

const CategoryItem: React.FunctionComponent<Props> = ({id, count, name}) => {
    const {parentMap}: CategoriesContext = useCategories();
    const categoryStatus = useSelector(({categoryStatus}: Store) => categoryStatus);
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState<boolean>(false);
    const [toggled, setToggled] = React.useState<boolean>(false);

    const onClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setToggled(!toggled);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked) {
            dispatch({type: "ADD", payload: {name, id}});
        } else {
            dispatch({type: "REMOVE", payload: {name, id}});
        }
        setChecked(event.target.checked);
    };

    return <div style={{margin: "5px"}}>
        {
            parentMap![id] ? toggled ? <RemoveCircleRounded color="action" onClick={onClick}/> : <AddCircleRounded color="action" onClick={onClick}/> : null
        }
        <Checkbox
            checked={!!categoryStatus![id]}
            onChange={handleChange}
            color="default"
        />
        {`${name} (${count})`}
        {
            toggled && <CategoryItemList categoryIds={parentMap![id]}/>
        }
    </div>;
};
export default CategoryItem;