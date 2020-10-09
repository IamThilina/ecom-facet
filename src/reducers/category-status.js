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
        default:
            return state
    }
}