import { Character } from '@/models/Character';
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
    },
    //get 1 Character from json object by id
    getCharacter(id: number) {
        return apiClient.get('/Character/' + id)
    },
    //post new character    
    postCharacter(character: Character) {
        return apiClient.post('/Character', character);
    },
    //edit character
    editCharacter(id: number){
        return apiClient.put('/Character/' + id);
    },
    //delete character
    deleteCharacter(id:number){
        return apiClient.delete('/Character/' + id);
    }
};