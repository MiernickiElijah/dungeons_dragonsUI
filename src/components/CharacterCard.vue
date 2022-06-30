<template>
  <div class="card text-white mb-3">
    <img :src="character.characterImage" class="card-img-top" alt="profile image" />
    <div class="card-body">
      <h5 class="card-title">{{ character.firstName }} "{{ character.name }}" {{ character.lastName }}</h5>
      <p class="card-text">{{ character.description }}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Level: {{ character.level }}</li>
        <li class="list-group-item"> Race: {{ character.characterRace }} Class: {{ character.characterClass }}</li>
        <li class="list-group-item"> Class: {{ character.characterClass }}</li>
        <li class="list-group-item"> Sub-Class / Multi-Class: {{ character.characterClass2 }}</li>
      </ul>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Age: {{ character.age }}</li>
        <li class="list-group-item"> Speed: {{ character.speed }}</li>
      </ul>

    </div>
    <div class="card-footer">
      <button @click="isShow = !isShow" class="btn btn-outline-success">Edit Character</button>
      <transition name="card-slide-fade">
        <div v-if="isShow">
          <form @submit.prevent="editCharacter()" class="form-group bg-dark text-white">
            <div class="form-control bg-dark text-white">
              <h3>Character Name</h3>
              <div class="form-group">
                <input v-model="characterModel.firstName" placeholder="First Name" class="form-control" type="input">
                <input v-model="characterModel.name" placeholder="Nickname" class="form-control" type="input">
                <input v-model="characterModel.lastName" placeholder="Last Name" class="form-control" type="input">
              </div>
              <h3>Character Info</h3>
              <div class="form-group">
                <input v-model="characterModel.level" placeholder="Level" class="form-control" type="input">
                <input v-model="characterModel.characterRace" placeholder="Race" class="form-control" type="input">
                <input v-model="characterModel.characterClass" placeholder="Class" class="form-control" type="input">
                <input v-model="characterModel.characterClass2" placeholder="Sub-Class / Multi-Class"
                  class="form-control" type="input">
                <input v-model="characterModel.age" placeholder="Age" class="form-control" type="input">
                <input v-model="characterModel.speed" placeholder="Speed" class="form-control" type="input">
              </div>
            </div>
            <div class="form-control bg-dark text-white">
              <h3>Character Image</h3>
              <input v-model="characterModel.characterImage" placeholder="Character Image URL" class="form-control"
                type="text" />
            </div>
            <div class="form-control bg-dark text-white">
              <h3>Description</h3>
              <input v-model="characterModel.description" placeholder="Description" class="form-control" type="text" />
              <button class="btn btn-outline-success" type="submit">Confirm</button>
            </div>
          </form>
          <button class="btn btn-outline-danger" v-on:click='deleteCharacter()'>DELETE</button>
          <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "CharacterCard",
  props: {
    character: Object
  },
  data() {
    return {
      isShow: false,
      characterModel: this.character
    }
  },
  methods: {
    editCharacter() {
      this.$emit('editCharacter', this.characterModel);
    },
    deleteCharacter() {
      this.$emit('deleteCharacter', this.characterModel);
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

.list-group {
  background-color: #0C4767;
}

.list-group-item {
  background-color: #0C4767;
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