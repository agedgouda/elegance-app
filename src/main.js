import { createApp } from "vue";
import App from "./App.vue";
import InstantSearch from 'vue-instantsearch/vue3/es';
import { createWebHistory, createRouter } from "vue-router";


import "./assets/main.css";

const app = createApp(App)
    .use(InstantSearch)
    .mount('#app')
