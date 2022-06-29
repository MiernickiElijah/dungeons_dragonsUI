<template>
    <form @submit="sendForm" class="form-group bg-dark text-white">
        <div class="form-control bg-dark text-white">
            <h3>Player Name</h3>
            <input v-model="player.firstName" placeholder="First Name" label="First Name" class="form-group"
                type="text" />
            <input v-model="player.lastName" placeholder="Last Name" label="Last Name" class="form-group" type="text" />
        </div>
        <div class="form-control bg-dark text-white">
            <h3>Player Image</h3>
            <input v-model="player.playerImage" placeholder="Player Image URL" label="player image" class="form-group"
                type="text" />
        </div>
        <div class="form-control bg-dark text-white">
            <h3>Description</h3>
            <input v-model="player.description" placeholder="Description" label="Description" class="form-group"
                type="text" />
            <br />
            <button class="btn btn-outline-success" type="submit">Add</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            player: {
                firstName: '',
                lastName: '',
                description: '',
                playerImage: '',
            },
        }
    },
    methods: {
        sendForm(event) {
            console.log(event)
            this.$store.dispatch('postPlayer', this.player)
                .catch(error => {
                    this.$router.push({
                        name: 'ErrorDisplay',
                        params: { error: error }
                    })
                })
        },
    }
}
</script>

<style>
.btn {
    margin: 10px 10px 10px;
}
</style>