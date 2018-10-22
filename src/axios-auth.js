import axios from 'axios'

import { FIREBASE_URL } from '../firebase-config'

const instance = axios.create({
  baseURL: FIREBASE_URL
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
