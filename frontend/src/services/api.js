import axios from 'axios'


// Base URL to the provided API
const api = axios.create({
baseURL: 'https://bookshop-api-er7t.onrender.com/api',
timeout: 10000,
})


export const getItems = (params) => api.get('/items', { params })
export const getItemById = (id) => api.get(`/items/${id}`)
export const createItem = (payload) => api.post('/items', payload)
export const updateItem = (id, payload) => api.put(`/items/${id}`, payload)
export const deleteItem = (id) => api.delete(`/items/${id}`)


export default api