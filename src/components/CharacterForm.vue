<template>
<div>
</div>
<form @submit.prevent="sendForm">
    <div class="form-control bg-dark text-white">
        <h3>Character Name</h3>
        <div class="form-row form-group">
            <BaseInput class="col"
            v-model="character.firstName"
            label="First Name"
            type="text"
            />
            <BaseInput class="col"
            v-model="character.name"
            label="Nickname"
            type="text"
            />
            <BaseInput class="col"
            v-model="character.lastName"
            label="Last Name"
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
    </div>
    <div class="form-control bg-dark text-white">
        <h3>Character Info</h3>
            <BaseInput
            v-model="character.level"
            label="level(number)"
            type="text"
            />
            <BaseInput
            v-model="character.speed"
            label="speed(number)"
            type="text"
            />
            <BaseInput
            v-model="character.age"
            label="age(number)"
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
        <div class="form-control bg-dark text-white">
        <h3>Character Image</h3>
            <input
            v-on:change="character.characterImage"
            type="file"
            />
        </div>
        <button class="btn btn-outline-success" type="submit">Add</button>
    </div>

    </form>
</template>

<script>
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
                characterImage: '',
            } 
        }        
    },
    methods: {
        sendForm () {
            this.$store.dispatch('postCharacter', this.character)
            .catch(error => {
                this.$router.push({
                    name: 'ErrorDisplay',
                    params: {error: error}
                })
            })
        },
    },
}

</script>

<style>
.btn{
    margin: 10px 10px 10px;
}
</style>