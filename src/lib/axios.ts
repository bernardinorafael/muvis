import axios from 'axios'

const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org',

  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    'Content-Type': 'application/json;charset=utf-8',
  },
})
