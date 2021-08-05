
import { FETCH_ALL, FETCH_GROUP, CREATE_GROUP, UPDATE_GROUP, START_LOADING, STOP_LOADING } from '../constants/actionTypes'

import * as api from '../api'

/* Since we are playing with asychronous data we have to apply redux-thunk 
 as it will take some time to fetch the data. */

/* Action creators are just functions that returns an object with properties type and payload. (payload is the data) 
   And we dispatch the action
*/

// Will get all the groups
export const getGroups = () => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        // Over here we are fetching all the data from api and dispatching it.
        const { data } = await api.fetchGroups()

        dispatch({type: FETCH_ALL, payload: data})
        dispatch({ type: STOP_LOADING })
    } catch (error) {
        console.log(error)
    }
}

// Will get a particular group
export const getGroup = (id) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        // Over here we are fetching all the data from api and dispatching it.
        const { data } = await api.fetchGroup(id)

        dispatch({type: FETCH_GROUP, payload: data})
        dispatch({ type: STOP_LOADING })

    } catch (error) {
        console.log(error)
    }
}

// Will create a group
export const createGroup = (group) => async (dispatch) => {
    try {
        
        const { data } = await api.createGroup(group)

        dispatch({type: CREATE_GROUP, payload: data})

    } catch (error) {
        console.log(error)
    }
} 

// will update the group
export const updateGroup = (id, group) => async (dispatch) => {

    try {
        const { data } = await api.updateGroup(id, group)
        
        dispatch({type: UPDATE_GROUP, payload: data})
    } catch (error) {
        console.log(error)
    }
}