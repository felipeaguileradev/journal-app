import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiEoyTIvghgtL4kkSQvx4GShZejKsV0GI",
  authDomain: "react-app-curso-ea3e9.firebaseapp.com",
  projectId: "react-app-curso-ea3e9",
  storageBucket: "react-app-curso-ea3e9.appspot.com",
  messagingSenderId: "564631088840",
  appId: "1:564631088840:web:40fddb5b1cc89cea303ffd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
