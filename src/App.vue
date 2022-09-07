 <template>

<div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/properties">Properties</router-link>
    <button v-on:click="loginRedirect">test</button>
    <br/>
    <img
      alt="Vue logo"
      class="logo"
      src="/images/elegance-rent-logo.300a5f44.png"
    />
  </div>
  <router-view />
</template>

<script setup>
import { useMsal } from '@/composition-api/useMsal';
import { msalInstance,loginRequest } from "./authConfig";
const { instance } = useMsal();
 
const accounts = msalInstance.getAllAccounts();
console.log("here ",accounts)

if (accounts.length === 0) {
  instance.loginRedirect();
}
const loginRedirect = () => {
  const accounts = instance.getAllAccounts();
  instance.loginRedirect();
}

</script>