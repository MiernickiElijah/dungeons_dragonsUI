import axios from 'axios'

const apiClient = axios.create ({
    baseURL: 'https://my-json-server.typicode.com/miernickielijah/flibbish',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
//get all players from json object in db
export default {
    getPlayers() {
        return apiClient.get('/players')
    },
//get 1 player from json object by id
    getPlayer(id: number) {
        return apiClient.get('/players/' + id)
    }
}