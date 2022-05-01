import { ActionType } from '../Action Type/ActionType'



//* Dispatch of Home and use in Aside for filter
const initialState = {
    getData: [],
    FilterData: []
}

export const SetData_Home = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_DATA:
            return {
                ...state,
                getData: action.payload
            }

        default:
            return state
    }
}


export const FilterData = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.FILTER_DATA:
            return {
                ...state,
                FilterData: action.payload
            }


        default:
            return state
    }
}

