import {CategoryStatus, SelectedCategory, Action} from "../types";

const initialState: CategoryStatus = {};

export default (state = initialState, {type, payload}: Action) => {
    switch(type){
        case "ADD":
            return {
                ...state,
                [payload.id]: true
            }
        case "REMOVE":
            delete state[payload.id];
            return {
                ...state
            }
        case "REMOVE_ALL":
            return initialState;
        case "SELECT_ALL_SUB_CATEGORY":
            const subCategoryStatus = payload.reduce((status: CategoryStatus, category: SelectedCategory) =>{
                status[category.id] = true
                return status;
            }, {});
            return {
                ...state,
                ...subCategoryStatus
            };
        case "REMOVE_ALL_SUB_CATEGORY":
            payload.forEach((category: SelectedCategory) => delete state[category.id]);
            return {
                ...state
            };

        default:
            return state
    }
}