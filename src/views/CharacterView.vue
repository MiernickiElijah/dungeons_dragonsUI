<template>
  <div class="btnContainer mx-auto">
    <!--on button click show model which is CharacterForm component else hide form-->
    <button @click="isShow = !isShow" class="btn btn-outline-success">Add Character</button>
    <div v-if="isShow">
      <CharacterForm></CharacterForm>
      <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
    </div>
  </div>
  <div class='card-deck d-flex justify-content-center'>
    <CharacterCard v-for="character in characters" :key="character.id" :character="character"
      @editCharacter="editCharacter" @deleteCharacter="deleteCharacter" />
  </div>
</template>

<script>
import { defineComponent } from "vue"
import CharacterCard from '@/components/CharacterCard.vue'
import CharacterForm from '../components/CharacterForm'
import CharacterService from "@/services/CharacterService";

export default defineComponent({
  name: "CharacterView",
  components: {
    CharacterCard,
    CharacterForm
  },
  data() {
    return {
      isShow: false
    }
  },
  created() {
    this.$store.dispatch('getCharacters')
  },
  computed: {
    characters() {
      return this.$store.state.characters
    }
  },
  methods: {
    editCharacter(character) {
      CharacterService.editCharacter(character).then(response => {
        //array update?
        this.characters.splice(0, this.characters.length).concat(response.data)
      }).catch(error => {
        this.$router
          .push({
            name: 'ErrorDisplay',
            params: { error: error }
          });
      });
    },
    deleteCharacter(character) {
      CharacterService.deleteCharacter(character.id).then(response => {
        //array update?
        this.characters.splice(0, this.characters.length).concat(response.data)
      }).catch(error => {
        this.$router
          .push({
            name: 'ErrorDisplay',
            params: { error: error }
          });
      });
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 2rem 0 0;
  color: #72DDF7;
}

h2 {
  margin: 2rem 0 0;
  color: #FFB100;
  font-size: medium;
}

.btnContainer {
  width: 75%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.btn:hover {
  color: #72DDF7;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 1rem;
}
</style>