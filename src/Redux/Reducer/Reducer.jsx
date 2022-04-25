import { ActionType } from '../Action Type/ActionType'



//* Dispatch of Home and use in Aside for filter
const initialState = {
    getData: [],
    Filter_Price: []
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


export const FilterPrice = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.FILTER_PRICE:
            return {
                ...state,
                Filter_Price: action.payload
            }


        default:
            return state
    }
}

