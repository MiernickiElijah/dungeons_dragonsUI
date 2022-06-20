<template>
<div class="btnContainer container-sm mx-auto">
        <!--on button click show model which is CharacterForm component else hide form-->
        <button @click="isShow = !isShow" class="btn btn-outline-success">Add Character</button>
          <div v-if="isShow">
            <CharacterForm class=""></CharacterForm>
            <button @click="isShow = !isShow" class="btn btn-outline-danger" type="button">Cancel</button>
          </div>
      </div>
      <div>
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
</template>

<script>
import { defineComponent } from "vue"
import CharacterCard from '@/components/CharacterCard.vue'
import CharacterService from "../services/CharacterService"
import CharacterForm from "../views/CharacterForm"

export default defineComponent({
name: "CharacterView",
    components: { 
      CharacterCard,
      CharacterForm
      },
  data() {
    return {
      characters: null,
      isShow: false
    }
  },
  created() {
    CharacterService.getCharacters().then(response => {
      this.characters = response.data
    }).catch(error => {
      console.log(error)
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnContainer{
  margin: 30px;
  width: 75%;
}

h1 {
  margin: 40px 0 0;
  color: #42b983;
}
h2 {
  margin: 10px 0 0;
  color: #2c3e50;
  font-size: medium;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>