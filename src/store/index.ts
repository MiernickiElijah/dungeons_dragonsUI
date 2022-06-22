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
    SET_PLAYERS(state, players) {
      state.players = players
    },
    ADD_PLAYER(state, player) {
      state.players.push(player)
    },
    SET_CHARACTERS(state, characters) {
      state.characters = characters
    },
    ADD_CHARACTER(state, character) {
      state.characters.push(character)
    }
  },
  //recieves the command to utilize services api to commit the mutation//
  actions: {
  //PLAYERS//
    getPlayers({commit}) {
      PlayerService.getPlayers()
        .then(response => {
          commit('SET_PLAYERS', response.data)
        })
        .catch(error => {
        console.log(error)
        })
      },
    postPlayer({commit}, player){
      PlayerService.postPlayer(player)
        .then(() => {
            console.log(player);
            commit('ADD_PLAYER', player)
          })
          .catch(error => {
           console.log(error);
          });
      },
    //CHARACTERS//
    getCharacters({commit}) {
      CharacterService.getCharacters()
        .then(response => {
          commit('SET_CHARACTERS', response.data)
          })
        .catch(error => {
       console.log(error)
        })
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


