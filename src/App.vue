<template>
  <nav>
    <router-link to="/">PLAYERS</router-link> |
    <router-link to="/characters">CHARACTERS</router-link>
  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a:hover {
  font-weight: bold;
  color:  rgb(25, 200, 231);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
