<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-transparent">
      <div class="container">
        <h1 class="display-4">Dungeon Master's Log</h1>
        <p class="lead">This is a helpful Dungeon Master tool to keep track of players and characters</p>
      </div>
    </div>
    <div class="btnContainer mx-auto">
      <!--on button click show model which is PlayerForm component else hide form-->
      <button @click="isShow = !isShow" class="btn btn-outline-success">Add Player</button>
      <transition name="slide-fade">
        <div v-if="isShow">
          <PlayerForm @submit="isShow = !isShow"></PlayerForm>
          <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
        </div>
      </transition>
    </div>
    <div class="card-deck d-flex justify-content-center">
      <PlayerCard v-for="player in players" :id='player.id' :key="player.id" :player="player"
        @deletePlayer="deletePlayer" @editPlayer="editPlayer" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PlayerCard from '@/components/PlayerCard.vue';
import PlayerForm from '@/components/PlayerForm.vue';

export default defineComponent({
  name: "PlayerView",
  components: {
    PlayerCard,
    PlayerForm,
  },
  data() {
    return {
      isShow: false,
    }
  },
  created() {
    this.$store.dispatch('getPlayers');
  },
  computed: {
    players() {
      return this.$store.state.players
    }
  },
  methods: {
    editPlayer(player) {
      this.$store.dispatch('editPlayer', player)
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          });
        });
    },
    deletePlayer(player) {
      this.$store.dispatch('deletePlayer', player)
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          });
        });
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 2rem 0 0;
  color: #72DDF7;
}

h2 {
  margin: 10px 0 0;
  color: #FFB100;
  font-size: medium;
}

.btnContainer {
  width: 75%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.btn:hover {
  color: #72DDF7;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 2rem;
}
</style>
