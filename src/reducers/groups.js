import { FETCH_ALL, FETCH_GROUP , CREATE_GROUP } from '../constants/actionTypes'


const groups = (state = { groups: [], group: [] }, action) => {
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
        default:
            return state
    }
}

export default groups



/*
    const groups = (groups = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case FETCH_GROUP:
            return [ ...groups, action.payload ]
        case CREATE_GROUP:
            return [...groups, action.payload ]
        default:
            return groups
    }
}

export default groups
*/