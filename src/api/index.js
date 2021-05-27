import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const fetchGroups = () => API.get('/groups')

export const fetchGroup = (id) => API.get(`/groups/${id}`)

export const createGroup = (newGroup) => API.post('/groups', newGroup)
 

