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