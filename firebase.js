import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage"
import firebase from 'firebase/compat/app'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7as8pFjSudjuiQKoPhAsiYFK3G_DMwpw",
  authDomain: "clone-334807.firebaseapp.com",
  projectId: "amazon-clone-334807",
  storageBucket: "amazon-clone-334807.appspot.com",
  messagingSenderId: "525406349762",
  appId: "1:525406349762:web:9ec756665657fd2762ce5b",
  measurementId: "G-SJRRZYF2SE"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage  }
// const app =  !firebase.apps.length
// ?firebase.initializeApp(firebaseConfig)
// :firebase.app();
// const db = app.firestore();

// export default db