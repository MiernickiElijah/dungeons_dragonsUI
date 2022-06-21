<template>
      <div class="card text-white mb-3">
        <img src="../assets/George_Clooney.gif" class="card-img-top" alt="clooney">
        <div class="card-body">
          <h5 class="card-title">{{character.firstName}} "{{character.name}}" {{character.lastName}}</h5>
          <p class="card-text">{{character.description}}</p>
            <ul class="list-group list-group-flush text-white">
              <li class="list-group-item text-white">Level: {{character.level}} | Race: {{character.characterRace}} | Class: {{character.characterClass}} / {{character.characterClass2}}</li>
              <li class="list-group-item text-white">Age: {{character.age}} years old. |  Speed: {{character.speed}} </li>
            </ul>
        </div>
        <div class="card-footer">
          <button @click="isShow = !isShow" class="btn btn-outline-success">Edit Character</button>
          <div v-if="isShow">
            <CharacterEditForm></CharacterEditForm>
            <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CharacterEditForm from '@/views/CharacterEditForm.vue';

export default defineComponent({
  name: 'CharacterCard',
  props: {
    character: Object
  },
      data() {
        return {
            isShow: false
        };
    },
    components: { CharacterEditForm }
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
.list-group-item{
  background-color: #0A0908;
}
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
</style>