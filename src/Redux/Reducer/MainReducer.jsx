import { combineReducers } from 'redux'
import { SetData_Home, FilterData } from './Reducer'



const MainReducer = combineReducers({
    SetData_Home,
    FilterData
})

export default MainReducer