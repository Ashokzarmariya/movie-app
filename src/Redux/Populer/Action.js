import {GET_POPULER_SUCCESS} from "./ActionType"

export const getPopulerMovie = (payload) => ({
    type: GET_POPULER_SUCCESS,
    payload,
})