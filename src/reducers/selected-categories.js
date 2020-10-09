export default (state = [], {type, payload}) => {
    switch(type){
        case "ADD":
            return [...state, payload]
        case "REMOVE":
            const categoryIndex = state.findIndex((category) => category.name === payload.name);
            return [
                ...state.slice(0, categoryIndex),
                ...state.slice(categoryIndex+1)
            ]
        default:
            return state
    }
}