import * as api from '../api'

/* Since we are playing with asychronous data we have to apply redux-thunk 
 as it will take some time to fetch the data. */

/* Action creators are just functions that returns an object with properties type and payload. (payload is the data) 
   And we dispatch the action
*/


export const getGroups = () => async (dispatch) => {

    try {
        // Over here we are fetching all the data from api and dispatching it.
        const { data } = await api.fetchGroups()

        dispatch({type: 'FETCH_ALL', payload: data})

    } catch (error) {
        console.log(error.message)
    }
}

export const createGroup = (group) => async (dispatch) => {
    try {
        
        const { data } = await api.createGroup(group)

        dispatch({type: 'CREATE_GROUP', payload: data})

    } catch (error) {
        console.log(error.message)
    }
} 