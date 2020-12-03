import { GET_TERMS } from "../actions/types"


const initialState = {
    searchTerms: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TERMS:
            return {
                ...state,
                searchTerms: action.payload
            }
        default:
            return state
    }
}