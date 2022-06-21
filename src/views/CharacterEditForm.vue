<template>
<form @submit.prevent="editCharacter()" class="form-group bg-dark text-white">
    <div class="form-control bg-dark text-white">
        <h3>Character Name</h3>
            <BaseInput
            v-model="character.firstName"
            label="First Name"
            type="text"
            />
            <BaseInput
            v-model="character.name"
            label="Nick Name / Middle Name"
            type="text"
            />
            <BaseInput
            v-model="character.lastName"
            label="Last Name"
            type="text"
            />
            <BaseInput
            v-model="character.description"
            label="Description"
            type="text"
            />
            <BaseInput
            v-model="character.level"
            label="level"
            type="text"
            />
            <BaseInput
            v-model="character.speed"
            label="Movement Speed"
            type="text"
            />
            <BaseInput
            v-model="character.age"
            label="Age"
            type="text"
            />
            <BaseInput
            v-model="character.characterClass"
            label="Class"
            type="text"
            />
            <BaseInput
            v-model="character.characterClass2"
            label="Sub-Class"
            type="text"
            />
            <BaseInput
            v-model="character.characterRace"
            label="Race"
            type="text"
            />

    </div>
    <div class="form-control bg-dark text-white">
        <h3>Description</h3>
            <BaseInput
            v-model="character.description"
            type="text"
            />
        <button class="btn btn-outline-success" type="submit">Confirm</button>
    </div>
    </form>
        <button class="btn btn-outline-danger" v-on:click='deleteCharacter()' >DELETE</button>
</template>

<script>
// import CharacterService from '@/services/CharacterService'
import BaseInput from '@/components/BaseInput.vue'

export default {
    components: {BaseInput},
     data() {
         return {
              character: {
                id : "",
                name : "",
                firstName : "",
                lastName : "",
                description : "",
                level : "",
                speed : "",
                age   : "",
                characterClass : "",
                characterClass2 : "",
                characterRace: "",
            },
        }       
    },
    methods: {
    editCharacter () {
        console.log("PUT");

        },
    deleteCharacter () {
        console.log("DELETE")
            //  CharacterService.deleteCharacter().then(response => {
            //      this.character = response.data
            //      }).catch(error => {
            //      console.log(error);
            //  });
        }
    }
}
</script>

<style>
.btn{
    margin: 10px 10px 10px;
}
</style>