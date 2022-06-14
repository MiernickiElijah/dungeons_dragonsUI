<template>
  <NavBarVue />
  <img alt="Vue logo" src="./assets/logo.png" />
  <SplashPage />
  <CharacterVue class="container"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBarVue from './components/NavBar.vue';
import SplashPage from './components/SplashPage.vue';
import CharacterVue from './components/Character.vue';

export default defineComponent({
  name: 'App',
  components: {
    SplashPage,
    NavBarVue,
    CharacterVue
}
});
</script>

<style>
#app {
  font-family: 'Charis SIL', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Charis+SIL&display=swap');
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css");
</style>