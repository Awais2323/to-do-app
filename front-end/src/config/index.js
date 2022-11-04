import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: 'https://task-to-do-nov.herokuapp.com/api/',
    // baseURL: 'http://localhost:8001/api/',
})

const token = localStorage.getItem('token')

export const httpOptions = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
            'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
        Authorization: localStorage.getItem('token'),
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        Allow: 'GET, POST, OPTIONS, PUT, DELETE',
    },
}
