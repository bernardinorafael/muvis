import axios from 'axios'

const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    language: 'pt-BR',
  },

  headers: {
    Authorization: `Bearer ${token}`,
  },
})
