import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAcHuSnmxym6-q6g-9esIjeBDuVw3DFp1M",
  authDomain: "lms-portal-1f2dc.firebaseapp.com",
  projectId: "lms-portal-1f2dc",
  storageBucket: "lms-portal-1f2dc.appspot.com",
  messagingSenderId: "471940190175",
  appId: "1:471940190175:web:284c14b69b13ffdd38be6a"
});

const db = getFirestore(app);
const auth = firebase.auth();

export { db, auth };