import axios from 'axios'
const BASE_URL = 'https://bookshop-api-er7t.onrender.com/api'

export const getItems = () => axios.get(`${BASE_URL}/items`)
export const getItemById = (id) => axios.get(`${BASE_URL}/items/${id}`)
export const createItem = (item) => axios.post(`${BASE_URL}/items`, item)
export const updateItem = (id, item) => axios.put(`${BASE_URL}/items/${id}`, item)
export const deleteItem = (id) => axios.delete(`${BASE_URL}/items/${id}`)
