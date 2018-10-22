import axios from 'axios'

import { FIREBASE_ENDPOINT } from '../firebase-config'

const instance = axios.create({
  baseURL: FIREBASE_ENDPOINT.signupNewUser
})

export default instance
