import axios from 'axios'

const apiClient = axios.create ({
    baseURL: 'https://localhost:7225/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
//get all players from json object in db
export default {
    getPlayers() {
        return apiClient.get('/Player')
    },
//get 1 player from json object by id
    getPlayer(id: number) {
        return apiClient.get('/Player/' + id)
    }
}