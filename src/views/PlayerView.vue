<template>
<div>
  <h1>Ready Player Run</h1>
    <h2>A helpful Dungeon Master tool to keep track of players and characters</h2>
      <div class="btnContainer mx-auto">
        <!--on button click show model which is PlayerForm component else hide form-->
        <button @click="isShow = !isShow" class="btn btn-outline-success">Add Player</button>
          <div v-if="isShow">
            <PlayerForm></PlayerForm>
            <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
          </div>
      </div>
    <div class="card-deck d-flex justify-content-center">
        <PlayerCard v-for="player in players" :key="player.id" :index="player.id" :player="player" />
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import PlayerCard from '@/components/PlayerCard.vue'
import PlayerForm from '@/components/PlayerForm.vue'


export default defineComponent({
    name: "PlayerView",
    components: {
    PlayerCard,
    PlayerForm,
},
  data() {
    return {
        isShow: false
      }
  },
  created() {
    this.$store.dispatch('getPlayers')
  },
  computed: {
    players() {
      return this.$store.state.players
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
  color:#72DDF7;
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
