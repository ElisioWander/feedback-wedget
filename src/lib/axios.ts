import axios from 'axios'

//baseURL está referenciando a rota do back-end
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})