import {
    FETCH_HOLIDAYS,
} from './actionTypes'

const initialState = {
    myEvents: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HOLIDAYS:
            return {
                myEvents: action.payload,
            }
        default: return state
    }
}

export default reducer