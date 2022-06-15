<template>
  <div class="hello">
    <h1>Ready Player Run</h1>
    <h2>This App is created with Vue, TypeScript, C#, .net6 core web API, SQL Server, and Entity Framework </h2>
    <PlayerCard v-for="player in players" :key="player.id" :player="player" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayerCard from '@/components/PlayerCard.vue';

export default defineComponent({
    name: "HomeView",
    props: {
        msg: String,
    },
    components: { 
      PlayerCard 
      },
  data() {
    return {
        players: [
      {
        id: 1,
        firstName: 'Eli',
        lastName: 'Miernicki',
        description: '18 years of playing...and still going.',
        characterCount: 3,
        characterClass: 'Rogue',
      },
      {
        id: 2,
        firstName: 'Rob',
        lastName: 'Chapin',
        description: '30 years of playing...and still going.',
        characterCount: 4,
        characterClass: 'Fighter',
      },
      {
        id: 3,
        firstName: 'Alan',
        lastName: 'Maxwell',
        description: '6 years of playing...and still going.',
        characterCount: 5,
        characterClass: 'Wizard',
      },
    ]}
  }
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
