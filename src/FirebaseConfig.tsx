// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app'
import { getAnalytics } from '@firebase/analytics'
import { getAuth } from '@firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBSyTyNby1JSwGF6qN-rWH9IZF3R8xvGOU',
  authDomain: 'bie-daalt-e678e.firebaseapp.com',
  projectId: 'bie-daalt-e678e',
  storageBucket: 'bie-daalt-e678e.appspot.com',
  messagingSenderId: '715331002353',
  appId: '1:715331002353:web:93cfe4f125293523b12e50',
  measurementId: 'G-D9GKW9GHYG',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const firebase_auth = getAuth(app)
