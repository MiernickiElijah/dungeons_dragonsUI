<template>
      <div class="card-deck">
        <CharacterCard/>
      </div>
</template>

<script>
import { defineComponent } from "vue"
import CharacterCard from '@/components/CharacterCard.vue'
import PlayerService from "../services/PlayerService"

export default defineComponent({
name: "CharacterView",
    components: { 
      CharacterCard 
      },
  data() {
    return {
      characters: null,
      id: 123
    }
  },
  created() {
    PlayerService.getPlayer(this.id).then(response => {
      this.characters = response.data
    }).catch(error => {
      console.log(error)
    })
  }
})
</script>