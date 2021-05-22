import axios from 'axios'

const url = 'http://localhost:5000/groups'

export const fetchGroups = () => axios.get(url)

export const createGroup = (newGroup) => axios.post(url, newGroup)