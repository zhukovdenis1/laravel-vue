<script>
import {mapGetters} from "vuex";

export default {
    // data() {
    //     return {
    //         name: null,
    //         age: null,
    //         job: null,
    //     }
    // },


    computed: {
        /*isDisabled() {
            //return this.name && this.age && this.job
            //return this.person.name && this.person.age && this.person.job
            return this.$store.getters.isDisabled
        },

        person() {
            return this.$store.getters.person
        },*/
        ...mapGetters({
            isDisabled: 'isDisabled',
            person: 'person'
        })
    },

    mounted() {
        //this.getPersons()
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    methods: {
        // getPersons() {
        //     axios.get('/api/people/' + this.$route.params.id)
        //         .then( res => {
        //             this.name = res.data.data.name
        //             this.age = res.data.data.age
        //             this.job = res.data.data.job
        //         })
        // },

        // update() {
        //     axios.patch('/api/people/' + this.$route.params.id, {name: this.name, age: this.age, job: this.job})
        //         .then( res => {
        //             this.$router.push({ name: 'person.show', params: {id: this.$route.params.id}})
        //         })
        // }
    }
}
</script>

<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" vmodel="name" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" vmodel="age" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" vmodel="job" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('update', {id: person.id, name: person.name, age: person.age, job: person.job})" click.prevent="update" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<style scoped>

</style>
