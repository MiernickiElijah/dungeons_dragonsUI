<template>
  <div class="Characters">
    <h1>CHARACTERS</h1>
    <Character/>
  </div>
</template>

<script>
import Character from '../components/Character.vue'

export default {
  components: {
    Character
  }
}
</script>

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