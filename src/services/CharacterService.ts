import axios from 'axios'
import { Character } from '@/models/Character';
import nProgress from 'nprogress';

const apiClient = axios.create({
    baseURL: 'https://localhost:7225/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

//loading bar for api//
apiClient.interceptors.request.use(config => {
    nProgress.start()
    return config
});

apiClient.interceptors.response.use(response => {
    nProgress.done()
    return response
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
        const c = confirm("Do you really want to delete it?");
        return apiClient.delete('/Character/' + character.id);
    }
}