<template>
<div class="container">
  <!-- v-for="character in characters"-->
<div class="card">
  <!-- the source would be changed to image connected in database to the character PK-->
  <img class="card-img-top" src="../assets/George_Clooney.gif" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{character.firstName}} "{{character.Name}}" {{character.lastName}}</h5>
    <p class="card-text">{{character.description}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Level: {{character.level}} | Race: {{character.characterRace}} | Class: {{character.characterClass}} / {{character.characterClass2}}</li>
    <li class="list-group-item">Age: {{character.age}} years old. |  Speed: {{character.speed}} | is HIDDEN?: {{character.isHidden}}</li>
  </ul>
  <div class="card-body">
    <li id="edit"><a href="#" class="card-link">EDIT CHARACTER</a></li>
    <li id="delete"><a href="#" class="card-link">DELETE CHARACTER</a></li>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CharacterCard',
  props: {
    character: Object,
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