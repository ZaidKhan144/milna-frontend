import { FETCH_ALL, FETCH_GROUP , CREATE_GROUP, UPDATE_GROUP, START_LOADING, STOP_LOADING, DELETE_GROUP, JOIN_GROUP } from '../constants/actionTypes'


const groups = ( state = { groups: [], isLoading: true }, action ) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case STOP_LOADING:
            return { ...state, isLoading: false }
        case FETCH_ALL:
            return {
                ...state,
                groups: action.payload 
            }
        case FETCH_GROUP:
            return { ...state, group: action.payload } 
        case CREATE_GROUP:
            return { ...state, groups: [ ...state.groups, action.payload ] }
        case UPDATE_GROUP:
            return { ...state, groups: state.groups.map((group) => (group._id === action.payload._id ? action.payload : group))}
        case DELETE_GROUP:
            return { ...state, groups: state.groups.filter((group) => group._id !== action.payload)}
        case JOIN_GROUP:
            return { ...state, groups: state.groups.map((group) => (group._id === action.payload._id ? action.payload : group))}
        default:
            return state
    }
}

export default groups
