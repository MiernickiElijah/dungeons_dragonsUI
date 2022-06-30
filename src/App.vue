<template>
  <div id="app">
    <nav>
      <router-link to="/">PLAYERS</router-link> |
      <router-link to="/Character">CHARACTERS</router-link>
    </nav>
    <router-view v-slot="{ Component, route }">
      <transition name="slide-fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFB100;
  background-color: #0A0908;
  scroll-behavior: smooth;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0C4767;
}

nav a:hover {
  transition: 1s;
  font-weight: bold;
  color: #72DDF7;
}

nav a.router-link-exact-active {
  color: #72DDF7;
}

/**transitions**/
.slide-fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.card-img-top {
  height: 18rem;
}
</style>
