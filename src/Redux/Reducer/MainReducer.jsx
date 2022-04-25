import { combineReducers } from 'redux'
import { SetData_Home, FilterPrice } from './Reducer'



const MainReducer = combineReducers({
    SetData_Home,
    FilterPrice
})

export default MainReducer