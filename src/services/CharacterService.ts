import axios from 'axios'

const apiClient = axios.create ({
    baseURL: 'https://localhost:7225/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
//get all Characters from json object in db
export default {
    getCharacters() {
        return apiClient.get('/Character')
    }
}