import axios from 'axios'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    language: 'pt-BR',
  },

  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'Content-Type': 'application/json;charset=utf-8',
  },
})
