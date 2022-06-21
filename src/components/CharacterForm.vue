<template>
<div>
</div>
<form @submit.prevent="sendForm">
    <div class="form-group bg-dark text-white">
        <h3>Character Name</h3>
        <div class="form-row">
            <BaseInput class="col form-group"
            v-model="character.firstName"
            label="First Name"
            type="text"
            />
            <BaseInput class="col form-group"
            v-model="character.name"
            label="Nickname"
            type="text"
            />
            <BaseInput class="col form-group"
            v-model="character.lastName"
            label="Last Name"
            type="text"
            />
            </div> 
    </div>
    <div class="form-group bg-dark text-white">
        <h3>Description</h3>
            <BaseInput
            v-model="character.description"
            type="text"
            />
    </div>
    <div class="form-group bg-dark text-white">
        <h3>Character Info</h3>
            <BaseInput class="form-group"
            v-model="character.level"
            label="level(number)"
            type="text"
            />
            <BaseInput class="form-group"
            v-model="character.speed"
            label="speed(number)"
            type="text"
            />
            <BaseInput class="form-group"
            v-model="character.age"
            label="age(number)"
            type="text"
            />
            <BaseInput class="form-group"
            v-model="character.characterClass"
            label="Class"
            type="text"
            />
            <BaseInput class="form-group"
            v-model="character.characterClass2"
            label="Sub-Class"
            type="text"
            />
            <BaseInput class="form-group"
            v-model="character.characterRace"
            label="Race"
            type="text"
            />
        <button class="btn btn-outline-success" type="submit">Add</button>
    </div>

    </form>
</template>

<script>
import CharacterService from '@/services/CharacterService'
import BaseInput from '@/components/BaseInput.vue'

export default {
    components: {BaseInput},
    data() {
        return {
            character: {
                name: '', 
                firstName: '',
                lastName: '', 
                description: '',
                level: '',
                speed: '', 
                age: '',
                characterClass: '', 
                characterClass2: '',    
                characterRace: '', 
            } 
        }        
    },
    methods: {
    sendForm () {
        CharacterService.postCharacter(this.character).then(response => {
            this.character = response.data
             }).catch(error => {
                console.log(error);
             });
        }
    }
}
</script>

<style>
.btn{
    margin: 10px 10px 10px;
}
</style>