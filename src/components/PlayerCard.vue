<template>
<div class="container row row-cols-1 row-cols-md-2 center">
  <div class="col mb-4 d-flex align-items-center justify-content-center">
    <router-link to="/Character">
      <div class="card text-white mb-3">
        <img src="../assets/General_Kenobi.gif" class="card-img-top" alt="kenobi">
        <div class="card-body">
          <h5 class="card-title">{{player.firstName}} {{player.lastName}}</h5>
          <p class="card-text">{{player.description}}</p>
        </div>
          <div class="card-body">
            <button type="button" class="btn btn-outline-info">Edit Player</button>
          </div>
    </div>
    </router-link>
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
  color: #FFB100;
  font-size: x-large;
}
.container {
   margin: 3rem auto;
}
.btn-outline-info:hover {
background-color: #72DDF7;
color: #0A0908;
font-weight: 400;
}
.card {
  background-color: #0C4767;
  max-width: 400px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
</style>