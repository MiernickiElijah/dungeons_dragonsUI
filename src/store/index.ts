import PlayerService from '@/services/PlayerService';
import CharacterService from '@/services/CharacterService';
import { createStore } from 'vuex';
import { Player } from '@/models/Player';
import { Character } from '@/models/Character';

// VADER https://c.tenor.com/R4ga77Y61ssAAAAC/yes.gif //

export default createStore({
  state: {
    user: 'Eli Miernicki',
    players: [] as Player[],
    characters: [] as Character[]
  },
  getters: {
  },
  //changes the state of the components by adding player to arrays//
  mutations: {
    //players//
    SET_PLAYERS(state, players) {
      state.players = players
    },
    ADD_PLAYER(state, player: Player) {
      state.players.push(player)
    },
    EDIT_PLAYER(state, editedPlayer: Player) {
      const index = state.players.findIndex(player => player.id === editedPlayer.id);
      if (index !== -1) {
        state.players.splice(index, 1, editedPlayer)
      }
    },
    DELETE_PLAYER(state, deletedPlayer: Player) {
      const index = state.players.findIndex(player => player.id === deletedPlayer.id);
      if (index !== -1) {
        state.players.splice(index, 1);
      }
    },
    //characters//
    SET_CHARACTERS(state, characters) {
      state.characters = characters
    },
    ADD_CHARACTER(state, character: Character) {
      state.characters.push(character);
    },
    EDIT_CHARACTER(state, editedCharacter: Character) {
      const index = state.characters.findIndex(character => character.id === editedCharacter.id);
      if (index !== -1) {
        return state.characters;
      }
    },
    DELETE_CHARACTER(state, deletedCharacter: Character) {
      const index = state.characters.findIndex(character => character.id === deletedCharacter.id);
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
    postPlayer({ commit }: any, player: Player) {
      PlayerService.postPlayer(player)
        .then((response) => {
          commit('SET_PLAYERS', response.data);
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
  }
});


