<template>
<form @submit.prevent="editPlayer()" class="form-group bg-dark text-white">
    <div class="form-control bg-dark text-white">
        <h3>Player Name</h3>
            <BaseInput
            v-model="player.firstName"
            label="First Name"
            type="text"
            />
            <BaseInput
            v-model="player.lastName"
            label="Last Name"
            type="text"
            />
    </div>
    <div class="form-control bg-dark text-white">
        <h3>Description</h3>
            <BaseInput
            v-model="player.description"
            type="text"
            />
        <button class="btn btn-outline-success" type="submit">Confirm</button>
    </div>
    </form>
        <button class="btn btn-outline-danger" v-on:click='deletePlayer()' >DELETE</button>
</template>

<script>
import PlayerService from '@/services/PlayerService'
import BaseInput from '@/components/BaseInput.vue'

export default {
    components: {BaseInput},
     data() {
         return {
              player: {
                id: 14, //need this to be dynamically passed down from V-for parent component
                firstName: '',
                lastName: '',
                description: '',
            }
         }       
     },
    methods: {
    editPlayer () {
         console.log("PUT", this.player.id);
             PlayerService.editPlayer(this.player.id).then(response => {
                 this.player = response.data
                 }).catch(error => {
                 console.log(error);
             });
        },
        
    deletePlayer () {
         console.log("DELETE", this.player.id);
             PlayerService.deletePlayer(this.player.id).then(response => {
                 this.player = response.data
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