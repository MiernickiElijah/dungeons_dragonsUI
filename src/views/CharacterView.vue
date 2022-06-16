<template>
      <div class="card-deck">
        <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
      </div>
</template>

<script>
import { defineComponent } from "vue"
import CharacterCard from '@/components/CharacterCard.vue'
import CharacterService from "../services/CharacterService"

export default defineComponent({
name: "CharacterView",
    components: { 
      CharacterCard 
      },
  data() {
    return {
      characters: null
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
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
h2 {
  margin: 10px 0 0;
  color: #2c3e50;
  font-size: medium;
}
.card-deck {
  padding: 4rem;
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