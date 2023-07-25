import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store.js'
import Keycloak from "keycloak-js";

let initOptions = {
    url: 'http://localhost:8080', realm: 'Vuejs-Realm', clientId: 'Vuejs-Client', onLoad:'login-required'
}

let keycloak = new Keycloak(initOptions)
store.commit('setClient', keycloak)

const app = createApp(App)
app.use(store)
app.mount('#app')
