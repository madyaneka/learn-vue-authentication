import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import { FIREBASE_API_KEY } from '../firebase-config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup({ commit }, authData) {
      axios.post(`/signupNewUser?key=${ FIREBASE_API_KEY }`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    login({ commit }, authData) {
      axios.post(`/verifyPassword?key=${ FIREBASE_API_KEY }`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  getters: {

  }
})
