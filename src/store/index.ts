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
  mutations: {
    ADD_PLAYER(state, player) {
      state.players.push(player)
    },
    ADD_CHARACTER(state, character) {
      state.characters.push(character)
    }
  },
  actions: {
  },
  modules: {
  }
});


