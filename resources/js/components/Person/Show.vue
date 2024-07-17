<script>
    export default {
        // data() {
        //     return {
        //         person: null
        //     }
        // },

        computed: {
            person() {
                return this.$store.getters.person
            }
        },

        mounted() {
            //this.getPerson()
            this.$store.dispatch('getPerson', this.$route.params.id)
        },

        methods: {
            // getPerson() {
            //     axios.get('/api/people/' + this.$route.params.id)
            //         .then( res => {
            //             this.person = res.data.data
            //         })
            // },
        }
    }
</script>

<template>
    <div v-if="person">
        <div>
            <b>Name:</b> {{ person.name}}
        </div>
        <div>
            <b>Age:</b> {{ person.age}}
        </div>
        <div>
            <b>Job:</b> {{ person.job}}
        </div>

        <router-link :to="{ name: 'person.edit', params: { id: this.person.id }}">Edit</router-link>
    </div>


</template>

<style scoped>

</style>
