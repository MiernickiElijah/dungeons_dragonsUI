<template>
  <div class="card text-white mb-3">
    <img :src="player.playerImage" class="card-img-top" alt="profile image" />
    <div class="card-body">
      <h5 class="card-title">{{ player.firstName }} {{ player.lastName }}</h5>
      <p class="card-text">{{ player.description }}</p>
    </div>
    <div class="card-footer">
      <button @click="isShow = !isShow" class="btn btn-outline-success">Edit Player</button>
      <transition name="card-slide-fade">
        <div v-if="isShow">
          <form @submit.prevent="editPlayer()" class="form-group bg-dark text-white">
            <div class="form-control bg-dark text-white">
              <h3>Player Name</h3>
              <div class="form-group">
                <input v-model="playerModel.firstName" placeholder="First Name" class="form-control" type="input">
                <input v-model="playerModel.lastName" placeholder="Last Name" class="form-control" type="input">
              </div>
            </div>
            <div class="form-control bg-dark text-white">
              <h3>Player Image</h3>
              <input v-model="playerModel.playerImage" placeholder="Image URL" class="form-control" type="input">
            </div>
            <div class="form-control bg-dark text-white">
              <h3>Description</h3>
              <input v-model="playerModel.description" placeholder="Description" class="form-control" type="input">
              <button @click="isShow = !isShow" class="btn btn-outline-success" type="submit">Confirm</button>
            </div>
          </form>
          <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button"
            v-on:click='deletePlayer()'>DELETE</button>
          <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PlayerCard",
  props: {
    player: Object
  },
  data() {
    return {
      isShow: false,
      playerModel: this.player
    }
  },
  methods: {
    editPlayer() {
      this.$emit('editPlayer', this.playerModel);
    },
    deletePlayer() {
      this.$emit('deletePlayer', this.playerModel);
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  margin: 2rem 0 0;
  color: #FFB100;
  font-size: x-large;
}

.btn-outline-info:hover {
  background-color: #72DDF7;
  color: #0A0908;
  font-weight: 400;
}

.card {
  background-color: #0C4767;
  max-width: 400px;
  min-width: 400px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}

.card-slide-fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}

.card-slide-fade-enter-active,
.card-slide-fade-leave-active {
  transition: all .5s ease;
}

.card-slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>