
import { FETCH_ALL, FETCH_GROUP , CREATE_GROUP } from '../constants/actionTypes'

import * as api from '../api'

/* Since we are playing with asychronous data we have to apply redux-thunk 
 as it will take some time to fetch the data. */

/* Action creators are just functions that returns an object with properties type and payload. (payload is the data) 
   And we dispatch the action
*/

// Will get all the groups
export const getGroups = () => async (dispatch) => {

    try {
        // Over here we are fetching all the data from api and dispatching it.
        const { data } = await api.fetchGroups()

        dispatch({type: FETCH_ALL, payload: data})

    } catch (error) {
        console.log(error.message)
    }
}

// Will get a particular group
export const getGroup = (id) => async (dispatch) => {

    try {
        // Over here we are fetching all the data from api and dispatching it.
        const { data } = await api.fetchGroup(id)

        dispatch({type: FETCH_GROUP, payload: data})

    } catch (error) {
        console.log(error.message)
    }
}

// Will create a group
export const createGroup = (group) => async (dispatch) => {
    try {
        
        const { data } = await api.createGroup(group)

        dispatch({type: CREATE_GROUP, payload: data})

    } catch (error) {
        console.log(error.message)
    }
} 