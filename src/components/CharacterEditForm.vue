<template>
<form @submit.prevent="editCharacter()" class="form-group bg-dark text-white">
    <div class="form-control bg-dark text-white">
        <h3>Character Name</h3>
        <div class="form-group">
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
            </div>
            <h3>Character Info</h3>
            <div class="form-group">
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
import CharacterService from '@/services/CharacterService'
import BaseInput from '@/components/BaseInput.vue'

export default {
    components: {BaseInput},
     data() {
         return {
              character: {
                id : 13, //need to make this dynamic selecting 
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
    props: ['id'],
    methods: {
        //headers only accepting GET and DELETE? //want page to render right after without refresh?
    editCharacter () {
         console.log("PUT", this.character.id);
             CharacterService.editCharacter(this.character).then(response => {
                 this.character = response.data
                 }).catch(error => {
                        this.$router
                    .push({
                        name: 'ErrorDisplay',
                        params: {error: error}
                    })
                })
            },
    deleteCharacter () {
         console.log("DELETE", this.character.id);
             CharacterService.deleteCharacter(this.character.id).then(response => {
                 this.character = response.data
                 }).catch(error => {
                        this.$router
                    .push({
                        name: 'ErrorDisplay',
                        params: {error: error}
                    })
                })
        }
    }
}

</script>

<style>
.btn{
    margin: 10px 10px 10px;
}
</style>