import {SelectedCategory, SelectedCategories, Action} from "../types";

const initialState: SelectedCategories = [];

export default (state = initialState, {type, payload}: Action) => {
    switch(type){
        case "ADD":
            return [...state, payload as SelectedCategory ]
        case "REMOVE":
            const categoryIndex = state.findIndex((category) => category.name === payload.name);
            return [
                ...state.slice(0, categoryIndex),
                ...state.slice(categoryIndex+1)
            ]
        case "REMOVE_ALL":
            return initialState;
        case "SELECT_ALL_SUB_CATEGORY":
            return [
                ...state,
                ...payload.map(({name, id}: SelectedCategory) => ({name, id}))
            ];
        case "REMOVE_ALL_SUB_CATEGORY":
            return payload.reduce((truncatedState: SelectedCategories, category: SelectedCategory)=>{
                const categoryIndex = truncatedState.findIndex(({name}) => name === category.name);
                return [
                    ...truncatedState.slice(0, categoryIndex),
                    ...truncatedState.slice(categoryIndex+1)
                ]
            }, state)
        default:
            return state
    }
}