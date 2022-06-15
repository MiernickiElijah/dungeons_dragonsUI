import axios from 'axios'

const apiClient = axios.create ({
    //HOW DO I CONNECT WITH SQL SERVER?
    baseURL: '#',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getPlayers() {
        return apiClient.get('/players')
    }
}