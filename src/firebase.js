// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAWp99ATu7DhCxt5O-2DuqrqOwXnpRx6pE",
  authDomain: "chatapp-d95b6.firebaseapp.com",
  projectId: "chatapp-d95b6",
  storageBucket: "chatapp-d95b6.appspot.com",
  messagingSenderId: "517082277084",
  appId: "1:517082277084:web:3b188bf40209d440a48019",
  measurementId: "G-FNNQ5WSENL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
