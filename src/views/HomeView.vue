<template>
  <div class="hello">
    <h1>Ready Player Run</h1>
    <h2>This App is created with Vue, TypeScript, C#, .net6 core web API, SQL Server, and Entity Framework </h2>
    <PlayerVue/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayerVue from '@/components/Player.vue';

export default defineComponent({
    name: "SplashPage",
    props: {
        msg: String,
    },
    components: { PlayerVue }
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
