<template>
    <div>
    </div>
    <form @submit.prevent="sendForm">
        <div class="form-control bg-dark text-white">
            <h3>Character Name</h3>
            <div class="form-row form-group">
                <input class="col form-group" v-model="character.firstName" placeholder="First Name" label="First Name"
                    type="text" />
                <input class="col form-group" v-model="character.name" label="Nickname" placeholder="Nickname"
                    type="text" />
                <input class="col form-group" v-model="character.lastName" label="Last Name" placeholder="Last Name"
                    type="text" />
            </div>
        </div>
        <div class="form-control bg-dark text-white">
            <h3>Character Info</h3>
            <input class="form-group" v-model="character.level" label="level(number)" placeholder="Level" type="text" />
            <input class="form-group" v-model="character.speed" label="speed(number)" placeholder="Speed" type="text" />
            <input class="form-group" v-model="character.age" label="age(number)" placeholder="Age" type="text" />
            <input class="form-group" v-model="character.characterClass" label="Class" placeholder="Class"
                type="text" />
            <input class="form-group" v-model="character.characterClass2" label="Sub-Class"
                placeholder="Sub-Class / Multi-Class" type="text" />
            <input class="form-group" v-model="character.characterRace" label="Race" placeholder="Race" type="text" />
        </div>
        <div class="form-control bg-dark text-white">
            <h3>Character Image</h3>
            <input class="form-group" v-model="character.characterImage" placeholder="Image URL" label="Character image"
                type="text" />
        </div>
        <div class="form-control bg-dark text-white">
            <h3>Description</h3>
            <input class="form-group" v-model="character.description" placeholder="Description" label="Description"
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
        sendForm() {
            this.$store.dispatch('postCharacter', this.character)
                .catch(error => {
                    this.$router.push({
                        name: 'ErrorDisplay',
                        params: { error: error }
                    })
                })
        },
    },
}

</script>

<style>
.btn {
    margin: 10px 10px 10px;
}
</style>