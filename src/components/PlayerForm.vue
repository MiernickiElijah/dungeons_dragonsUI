<template>
<form @submit.prevent="sendForm" class="form-group bg-dark text-white">
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
        <button class="btn btn-outline-success" type="submit">Add</button>
    </div>
    </form>
</template>

<script>
import PlayerService from '@/services/PlayerService'
import BaseInput from '@/components/BaseInput.vue'
// import { v4 as uuidv4} from 'uuid'

export default {
    components: {BaseInput},
    data() {
        return {
            player: {
                firstName: '',
                lastName: '',
                description: ''
            },
        }       
    },
    methods: {
    sendForm () {
        // this worked but would need to change db to accept string for id instead of int
        // this.player.id = uuidv4();
        PlayerService.postPlayer(this.player)
        .then(() => {
            console.log(this.player);
            this.$store.commit('ADD_PLAYER', this.player)
             }).catch(error => {
                console.log(error);
             });
        },
    }
}
</script>

<style>
.btn{
    margin: 10px 10px 10px;
}
</style>