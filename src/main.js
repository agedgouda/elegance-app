import { createApp } from "vue";
import App from "./App.vue";
import InstantSearch from 'vue-instantsearch/vue3/es';
import router from '@/router/index'
import "@/assets/main.css";
import { msalPlugin } from "./plugins/msalPlugin";
import { msalInstance,loginRequest } from "./authConfig";
import { EventType } from "@azure/msal-browser";

// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});

const app = createApp(App)
    .use(InstantSearch)
    .use(router)
    .use(msalPlugin, msalInstance,loginRequest)
    .mount('#app')