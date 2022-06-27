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
        <div class="form-control bg-dark text-white">
        <h3>Player Image</h3>
            <input
            v-on:change="player.playerImage"
            type="file"
            />
        </div>
    </div>
    <div class="form-control bg-dark text-white">
        <h3>Description</h3>
            <BaseInput
            v-model="player.description"
            label="Description"
            type="text"
            />
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
            player: {
                firstName: '',
                lastName: '',
                description: '',
                playerImage: ''
            },
        }       
    },
    methods: {
    sendForm (event) {
        console.log(event)
        this.$store.dispatch('postPlayer', this.player)
        .catch(error => {
            this.$router.push({
                name: 'ErrorDisplay',
                params: {error: error}
            })
        })
        },
    }
}
</script>

<style>
.btn{
    margin: 10px 10px 10px;
}
</style>