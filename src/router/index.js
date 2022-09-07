
import { createWebHistory, createRouter } from "vue-router";
import PropertyList from "@/components/PropertyList.vue";
import Login from "@/components/Login.vue";

const routes = [
  { path: '/', component: PropertyList },
  { path: '/properties', component: PropertyList },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;