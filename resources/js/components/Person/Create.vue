<script>
import {mapGetters} from "vuex";

export default {
    data() {
        // return {
        //     name: null,
        //     age: null,
        //     job: null,
        // }
    },

    mounted() {
        this.$store.commit('setPerson', {name: null, age: null, job: null})
        //чтобы при переходе из Edit в Add не подставляюлись данные из Edit
    },

    computed: {
        /*isDisabled() {
            //return this.name && this.age && this.job
            return this.$store.getters.isDisabled
        },

        person() {
            return this.$store.getters.person
        }*/

        ...mapGetters({
            isDisabled: 'isDisabled',
            person: 'person'
        })
    },

    methods: {
        // store() {
        //     axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
        //         .then( res => {
        //             this.$router.push({ name: 'person.index'})
        //         })
        // },
    }
}
</script>

<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="person.name" vmodel="name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" vmodel="age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" vmodel="job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('store',  {name: person.name, age: person.age, job: person.job})" click.prevent="store" type="submit" value="Add" class="btn btn-primary">
        </div>
    </div>
</template>

<style scoped>

</style>
