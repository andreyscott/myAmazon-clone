import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz-nezOFZm_VrwLm3N9clnCQySCUt5MFM",
  authDomain: "clone-92be1.firebaseapp.com",
  projectId: "clone-92be1",
  storageBucket: "clone-92be1.appspot.com",
  messagingSenderId: "875117563734",
  appId: "1:875117563734:web:c66b1e96333da17d3ad0f7",
  measurementId: "G-99VMRY3KYT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };