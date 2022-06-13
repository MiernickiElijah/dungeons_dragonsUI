<template>
  <NavBarVue />
  <img alt="Vue logo" src="./assets/logo.png" />
  <SplashPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBarVue from './components/NavBar.vue';
import SplashPage from './components/SplashPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    SplashPage,
    NavBarVue
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
</style>