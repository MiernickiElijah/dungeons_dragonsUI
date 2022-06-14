<template>
<div class="container">
<div class="card">
  <img class="card-img-top" src="../assets/George_Clooney.gif" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">CHARACTER NAME</h5>
    <p class="card-text">DESCRIPTION.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">LEVEL CLASS RACE</li>
    <li class="list-group-item">AGE SPEED HIDDEN?</li>
    <li class="list-group-item">PLAYER NAME</li>
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
  name: 'DbCharacter',
  props: {
    msg: String,
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  margin: 40px 0 0;
  color: #42b983;
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
#delete {
    color: red; 
    font-weight: bolder;
}
</style>