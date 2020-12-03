import { GET_TERMS } from "../actions/types"


const initialState = {
    terms: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TERMS:
            return {
                ...state,
                terms: action.payload
            }
        default:
            return state
    }
}