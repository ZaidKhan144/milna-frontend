
export default (groups = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE_GROUP':
            return [...groups, action.payload]
        default:
            return groups
    }
}