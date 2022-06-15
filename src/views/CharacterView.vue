<template>
  <div class="Characters">
    <h1>CHARACTERS</h1>
    <CharacterCard v-for="character in characters" :key="character.id" :character="character"/>
  </div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue'
// import PlayerService from '../services/PlayerService'

export default {
  components: {
    CharacterCard
  },
  data() {
    return {
        characters: null
    }
  },
  //   created() {
  //   PlayerService.get().then(response => {
  // this.players.character = response.data
  //      }).catch(error => {
  //        console.log(error)
  //      })
  //    }
 };

</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
h5 {
  margin: 40px 0 0;
  color: #42b983;
  font-size: x-large;
}
.container {
   margin: 2rem auto;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#edit {
    color: rgb(14, 156, 97); 
    font-weight: bold;
}
#delete {
    color: red; 
    font-weight: bold;
}
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
</style>