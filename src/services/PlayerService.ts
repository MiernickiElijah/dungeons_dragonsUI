import axios from 'axios';
import { Player } from '@/models/Player';
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

//get all players from json object in db
export default {
    getPlayers() {
        return apiClient.get('/Player');
    },
    //get 1 player from json object by id
    getPlayer(id: string) {
        return apiClient.get('/Player/' + id);
    },
    //post new player
    postPlayer(player: Player) {
        const formData = new FormData();
        formData.append('firstName', player.firstName);
        formData.append('lastName', player.lastName);
        formData.append('description', player.description);
        formData.append('image', player.playerImage);
        return apiClient.post('/Player', formData,
        {
            headers: {
                    'Content-Type': 'multipart/form-data'
            }
        });
    },
    //edit player
    editPlayer(player: Player) {
        return apiClient.put('/Player/' + player.id, player);
    },
    //delete player
    deletePlayer(player: Player) {
        const c = confirm("Do you really want to delete it?")
        return apiClient.delete('/Player/' + player.id);
    }
}