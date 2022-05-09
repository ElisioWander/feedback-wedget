import axios from 'axios'

console.log(import.meta.env)

//baseURL está referenciando a rota do back-end
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})