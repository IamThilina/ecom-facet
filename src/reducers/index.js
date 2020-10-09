import {combineReducers} from 'redux'
import selectedCategories from './selected-categories'

const rootReducer = combineReducers({
    selectedCategories,
})

export default rootReducer