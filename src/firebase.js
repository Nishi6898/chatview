
import firebase from 'firebase/app';
import 'firebase/auth'
//import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCkdW-Q91jfUJWopcx6lvOrUe-DZq6Vt1s",
  authDomain: "oauth-chat-c570f.firebaseapp.com",
  projectId: "oauth-chat-c570f",
  storageBucket: "oauth-chat-c570f.appspot.com",
  messagingSenderId: "566122130018",
  appId: "1:566122130018:web:98d77553719ec0e0bbbf3b",
  measurementId: "G-9KMJG8C0W3"
    
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
