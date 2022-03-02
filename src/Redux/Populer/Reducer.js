import { GET_POPULER_SUCCESS } from "./ActionType";

const init = {
    data: [],
    loading:true
}

export const populerReducer = (store=init, { type, payload }) => {
    switch (type) {
        case GET_POPULER_SUCCESS:
            return {...store, data:payload, loading:false}
    
        default:
            return store
    }
}