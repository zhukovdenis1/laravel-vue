import { createStore } from 'vuex'

import Person from './store/modules/person'

const store = createStore({
    modules: {
        Person
    }
})

export default store
