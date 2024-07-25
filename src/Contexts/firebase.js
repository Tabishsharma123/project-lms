import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyASI-5F2_t7yDEFXxN_0b1MqDM8VIVO92s",
  authDomain: "lmsp-701e7.firebaseapp.com",
  projectId: "lmsp-701e7",
  storageBucket: "lmsp-701e7.appspot.com",
  messagingSenderId: "140727697051",
  appId: "1:140727697051:web:31d7b278ec39bbb7d7103e",
  measurementId: "G-XG58JQ12SK",
});


const db = getFirestore(app);
const auth = firebase.auth();


export { db, auth };
