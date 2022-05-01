import { ActionType } from '../Action Type/ActionType'



//* Dispatch of Home and use in Aside for filter
export const GetData = (data) => {
    return {
        type: ActionType.GET_DATA,
        payload: data
    }
}

//* Dispatch of Aside and use in Home
export const filter_Data = (data) => {
    return {
        type: ActionType.FILTER_DATA,
        payload: data
    }
}