import { FETCH_ALL, FETCH_GROUP , CREATE_GROUP, UPDATE_GROUP } from '../constants/actionTypes'


const groups = (state = { groups: [] }, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                groups: action.payload
            } 
        case FETCH_GROUP:
            return { ...state, group: action.payload } 
        case CREATE_GROUP:
            return { ...state, groups: [...state.groups, action.payload] }
        case UPDATE_GROUP:
            return { ...state, groups: state.groups.map((group) => group._id === action.payload._id ? action.payload : group) }
        default:
            return state
    }
}

export default groups
