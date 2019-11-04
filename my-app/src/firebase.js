import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLzAxiPm0eAIrupIYpu2YVUcakDYya0HI",
    authDomain: "hackaton-interna.firebaseapp.com",
    databaseURL: "https://hackaton-interna.firebaseio.com",
    projectId: "hackaton-interna",
    storageBucket: "hackaton-interna.appspot.com",
    messagingSenderId: "99240587176",
    appId: "1:99240587176:web:91c200d0463613177ff79d",
    measurementId: "G-HHW5NX863J"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;