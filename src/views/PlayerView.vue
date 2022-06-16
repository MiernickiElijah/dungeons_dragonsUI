<template>
  <div>
    <h1>Ready Player Run</h1>
    <h2>This App is created with Vue, TypeScript, C#, .net6 core web API, SQL Server, and Entity Framework </h2>
      <div class="card-deck">
        <PlayerCard v-for="player in players" :key="player.id" :player="player" />
      </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import PlayerCard from '@/components/PlayerCard.vue'
import PlayerService from '../services/PlayerService'

export default defineComponent({
    name: "PlayerView",
    components: { 
      PlayerCard 
      },
  data() {
    return {
        players: null
      }
  },
  created() {
    PlayerService.getPlayers().then(response => {
      this.players = response.data
    }).catch(error => {
      console.log(error)
    })
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
h2 {
  margin: 10px 0 0;
  color: #2c3e50;
  font-size: medium;
}
.card-deck {
  padding: 4rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
