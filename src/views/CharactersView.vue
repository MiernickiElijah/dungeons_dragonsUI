<template>
  <div class="Characters">
    <h1>CHARACTERS</h1>
    <CharacterCard v-for="character in characters" :key="character.id" :character="character"/>
  </div>
</template>

<script>
import CharacterCard from '../components/CharacterCard.vue'

export default {
  components: {
    CharacterCard
  },
  data() {
    return {
        characters: [
      {
      id: 1,
      nickName: 'DawnCaller',
      firstName: 'Draago',
      lastName: 'Vitiri',
      description: 'Tricorn hat, leather duster, cane sword',
      level: 3,
      speed: 30,
      age: 30,
      isHidden: true,
      characterClass: 'Rogue',
      characterClass2: 'Swashbuckler',
      characterRace: 'Goliath'
      },
      {
      id: 2,
      nickName: 'Mad Fox',
      firstName: 'Thaddeus',
      lastName: 'Snow',
      description: 'Long Silver Hair, leather armor, dual scimitars',
      level: 12,
      speed: 35,
      age: 301,
      isHidden: true,
      characterClass: 'Rogue / Fighter',
      characterClass2: 'Thief',
      characterRace: 'Elf'
      },
      {
      id: 3,
      nickName: 'The Fool',
      firstName: 'Tom',
      lastName: 'Lint',
      description: 'Long Silver Hair, tattoos, wand',
      level: 20,
      speed: 40,
      age: 3301,
      isHidden: false,
      characterClass: 'Wizard',
      characterClass2: 'Master',
      characterRace: 'Elf'
      },
    ]}
  }
}
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
h5 {
  margin: 40px 0 0;
  color: #42b983;
  font-size: x-large;
}
.container {
   margin: 2rem auto;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#edit {
    color: rgb(14, 156, 97); 
    font-weight: bold;
}
#delete {
    color: red; 
    font-weight: bold;
}
 a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
</style>