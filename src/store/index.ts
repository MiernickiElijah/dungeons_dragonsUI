import PlayerService from '@/services/PlayerService'
import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex'


// VADER https://c.tenor.com/R4ga77Y61ssAAAAC/yes.gif //

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
    //players//
    SET_PLAYERS(state, players) {
      state.players = players
    },
    ADD_PLAYER(state, player) {
      state.players.push(player)
    },
    EDIT_PLAYER(state, player) {
      const index = state.players.indexOf(player);
      if (index !== -1) {
        return state.players;
      }
    },
    DELETE_PLAYER(state, player) {
      const index = state.players.indexOf(player);
      if (index !== -1) {
        state.players.splice(index, 1);
      }
    },

    //characters//
    SET_CHARACTERS(state, characters) {
      state.characters = characters
    },
    ADD_CHARACTER(state, character) {
      state.characters.push(character)
    },
    EDIT_CHARACTER(state, character) {
      const index = state.characters.indexOf(character);
      if (index !== -1) {
        return state.characters;
      }
    },
    DELETE_CHARACTER(state, character) {
      const index = state.characters.indexOf(character);
      if (index !== -1) {
        state.characters.splice(index, 1);
      }
    },
  },

  //recieves the command to utilize services api to commit the mutation//
  actions: {
    //PLAYERS//
    getPlayers({ commit }) {
      return PlayerService.getPlayers()
        .then(response => {
          commit('SET_PLAYERS', response.data);
        })
        .catch(error => {
          throw (error);
        });
    },
    postPlayer({ commit }, player) {
      PlayerService.postPlayer(player)
        .then(() => {
          commit('ADD_PLAYER', player);
        })
        .catch(error => {
          throw (error);
        });
    },
    editPlayer({ commit }, player) {
      PlayerService.editPlayer(player)
        .then(() => {
          commit('EDIT_PLAYER', player);
        })
        .catch(error => {
          throw (error);
        });
    },
    deletePlayer({ commit }, player) {
      PlayerService.deletePlayer(player)
        .then(() => {
          commit('DELETE_PLAYER', player);
        })
        .catch(error => {
          throw (error);
        });
    },
    //CHARACTERS//
    getCharacters({ commit }) {
      return CharacterService.getCharacters()
        .then(response => {
          commit('SET_CHARACTERS', response.data);
        })
        .catch(error => {
          throw (error)
        });
    },
    postCharacter({ commit }, character) {
      CharacterService.postCharacter(character)
        .then(() => {
          commit('ADD_CHARACTER', character);
        }).catch(error => {
          throw (error);
        });
    },
    editCharacter({ commit }, character) {
      CharacterService.editCharacter(character)
        .then(() => {
          commit('EDIT_CHARACTER', character);
        })
        .catch(error => {
          throw (error);
        });
    },
    deleteCharacter({ commit }, character) {
      CharacterService.deleteCharacter(character)
        .then(() => {
          commit('DELETE_CHARACTER', character);
        })
        .catch(error => {
          throw (error);
        });
    },
  },
  modules: {
  }
});


