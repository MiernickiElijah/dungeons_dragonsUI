import PlayerService from '@/services/PlayerService'
import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Eli Miernicki',
    players: [] as string[],
    characters: [] as string[]
  },
  getters: {
  },
  //changes the state of the components by adding player to arrays//
  mutations: {
    ADD_PLAYER(state, player) {
      state.players.push(player)
    },
    ADD_CHARACTER(state, character) {
      state.characters.push(character)
    }
  },
  //recieves the command to utilize services api to commit the mutation//
  actions: {
    postPlayer({commit}, player){
      PlayerService.postPlayer(player)
        .then(() => {
            console.log(player);
            commit('ADD_PLAYER', player)
             }).catch(error => {
                console.log(error);
             });
    },
    postCharacter({commit}, character){
      CharacterService.postCharacter(character)
            .then(() => {
                console.log(character);
                commit('ADD_CHARACTER', character)
                }).catch(error => {
                    console.log(error);
                });
  },
},
  modules: {
  }
});


