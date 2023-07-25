<script>
import store from "@/store.js";
import Keycloak from "keycloak-js";

export default {
  methods: {
    login() {
      let keycloak = store.getters.getClient;
      console.log("authenticated? " + keycloak.authenticated)
      /*
      * TODO
      * Check if the session is valid,
      * if not, init new client.
      * if yes, return.
      * */
      keycloak.init({onLoad: 'login-required'}).then((auth) => {
        if(!auth) {
          console.error("[-] Error during authentication.")
        }
        else {
          console.log("[+] User successfully authenticated.")
          store.commit('setToken', keycloak.token)
        }
      })
      console.log('Login button clicked');
    }
  }
};
</script>

<template>
  <button class="login-button" @click="login">Login</button>
</template>

<style scoped>
.login-button {
  background-color: #2196F3;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #1976D2;
}

.login-button:focus {
  outline: none;
}

.login-button:active {
  background-color: #0D47A1;
}
</style>