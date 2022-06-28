<template>
  <div class="card text-white mb-3">
    <img :src="player.playerImage" class="card-img-top" alt="profile image"/>
      <div class="card-body">
          <h5 class="card-title">{{player.firstName}} {{player.lastName}}</h5>
          <p class="card-text">{{player.description}}</p>
      </div>
        <div class="card-footer">
          <button @click="isShow = !isShow" v-on:click="getId" class="btn btn-outline-success">Edit Player</button>
          <div v-if="isShow">
            <PlayerEditForm></PlayerEditForm>
            <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
          </div>
        </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlayerEditForm from '@/components/PlayerEditForm.vue';

export default defineComponent({
    name: "PlayerCard",
    props: {
        player: Object,
    },
    data() {
        return {
            isShow: false,
        };
    },
    components: { PlayerEditForm }
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
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
</style>