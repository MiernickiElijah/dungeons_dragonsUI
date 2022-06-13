<template>
  <div class="nav-bar">
    <ul>
    <li class="tab" href="#">HOME</li>
    <li class="tab" href="#">CONTACT</li>
    <li class="tab" href="#">THIS</li>
  </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBarVue',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 40px 0 0;
  color: #42b983;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
