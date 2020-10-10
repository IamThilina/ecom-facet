const initialState = {};

export default (state = {}, {type, payload}) => {
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
            const subCategoryStatus = payload.reduce((status, category) =>{
                status[category.id] = true
                return status;
            }, {});
            return {
                ...state,
                ...subCategoryStatus
            };
        case "REMOVE_ALL_SUB_CATEGORY":
            payload.forEach((category) => delete state[category.id]);
            return {
                ...state
            };

        default:
            return state
    }
}