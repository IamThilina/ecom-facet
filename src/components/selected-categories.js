import * as React from "react";
import {useSelector} from 'react-redux'

const SelectedCategories = () => {
    const selectedCategories = useSelector(({selectedCategories}) => selectedCategories);

    return selectedCategories.map((category) => <div>{category.name}</div>)

};

export default SelectedCategories;