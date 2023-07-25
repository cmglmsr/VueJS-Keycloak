import { createStore } from 'vuex';
import Keycloak from "keycloak-js";

export default createStore({
    state() {
        return {
            token: null,
            client: null
        };
    },
    mutations: {
        setToken(state, newValue) {
            state.token = newValue;
        },
        setClient(state, newClient) {
            state.client = newClient;
        }
    },
    actions: {
        updateToken({ commit }, newValue) {
            commit('setToken', newValue);
        }
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getClient(state) {
            return state.client;
        }
    }
});