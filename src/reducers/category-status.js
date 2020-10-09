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
        default:
            return state
    }
}