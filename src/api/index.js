import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchGroups = () => API.get('/groups')

export const fetchGroup = (id) => API.get(`/groups/${id}`)

export const createGroup = (newGroup) => API.post('/groups', newGroup)
 
export const updateGroup = (id, updatedGroup) => API.patch(`/groups/${id}`, updatedGroup)

export const deleteGroup = (id) => API.delete(`/groups/${id}`)

