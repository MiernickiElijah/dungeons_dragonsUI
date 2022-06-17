<template>
  <nav>
    <router-link to="/">PLAYERS</router-link> |
    <router-link to="/Character">CHARACTERS</router-link>
  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFB100;
  background-color: #0A0908;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0C4767;
}

nav a:hover {
  font-weight: bold;
  color:  #72DDF7;
}

nav a.router-link-exact-active {
  color: #72DDF7;
}
</style>
