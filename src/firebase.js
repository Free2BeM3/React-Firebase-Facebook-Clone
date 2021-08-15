import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxa4p4u2oifFc3zKbGGMQO8Ge79uSkWhI",
    authDomain: "react-firebase-fb-clone-mj.firebaseapp.com",
    projectId: "react-firebase-fb-clone-mj",
    storageBucket: "react-firebase-fb-clone-mj.appspot.com",
    messagingSenderId: "409108965090",
    appId: "1:409108965090:web:cb14a0ac811963a3eca0bb",
    measurementId: "G-RRG9VT59G7"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;