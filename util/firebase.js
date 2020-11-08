import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPKoRT_M-IiPU_armcwnM5TnvzWsTW97U",
  authDomain: "campingstartup.firebaseapp.com",
  databaseURL: "https://campingstartup.firebaseio.com",
  projectId: "campingstartup",
  storageBucket: "campingstartup.appspot.com",
  messagingSenderId: "1046881603430",
  appId: "1:1046881603430:web:93ff5f5dd57941030102a7",
  measurementId: "G-V7HJZ1F0L0"
}

if (!firebase.apps.length)
  firebase.initializeApp(firebaseConfig)

export default firebase
