import axios from 'axios'

// Rodando json server deploy vercel
export const api = axios.create({
  baseURL: 'https://dt-money-ntzvn6awp-amandasaporiti-gmailcom.vercel.app/',
})

// Rodando json server localmente
export const apiLocal = axios.create({
  baseURL: ' http://localhost:3000/',
})
