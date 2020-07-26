import axios from 'axios'

const http = axios.create({
  baseURL: process.env['VUE_APP_BASE_API'],
  timeout: 5000
})


export default http
