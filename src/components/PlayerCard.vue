<template>
<div class="container">
  <!-- v-for="Player in Players"-->
<div class="card">
  <!-- the source would be changed to image connected in database to the Player PK-->
  <img class="card-img-top" src="../assets/General_Kenobi.gif" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{player.firstName}} {{player.lastName}}</h5>
    <p class="card-text">{{player.description}}.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Active Characters: {{player.characterCount}}</li>

<!-- v-for list of character names as clickable links-->

  </ul>
  <div class="card-body">
    <li id="edit"><a href="#" class="card-link">EDIT Player</a></li>
    <li id="delete"><a href="#" class="card-link">DELETE Player</a></li>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlayerCard',
  props: {
    player: Object
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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