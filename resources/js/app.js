import './bootstrap';

import { createApp } from 'vue'

import router from './router.js'
import store from "@/store.js";


createApp({})
    .use(router)
    .use(store)
    .mount('#app')
