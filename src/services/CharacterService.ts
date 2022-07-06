import axios from 'axios'
import { Character } from '@/models/Character';

const apiClient = axios.create({
    baseURL: 'https://localhost:7225/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});
//get all Characters from json object in db
export default {
    getCharacters() {
        return apiClient.get('/Character')
    },
    //get 1 Character from json object by id
    getCharacter(id: string) {
        return apiClient.get('/Character/' + id)
    },
    //post new character    
    postCharacter(character: Character) {
        return apiClient.post('/Character', character);
    },
    //edit character
    editCharacter(character: Character) {
        return apiClient.put('/Character/' + character.id, character);
    },
    //delete character
    deleteCharacter(character: Character) {
        return apiClient.delete('/Character/' + character.id);
    }
}