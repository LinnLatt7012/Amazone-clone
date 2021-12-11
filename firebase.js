import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage} from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7as8pFjSudjuiQKoPhAsiYFK3G_DMwpw",
    authDomain: "clone-334807.firebaseapp.com",
    projectId: "amazon-clone-334807",
    storageBucket: "amazon-clone-334807.appspot.com",
    messagingSenderId: "525406349762",
    appId: "1:525406349762:web:9ec756665657fd2762ce5b",
    measurementId: "${config.measurementId}"
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage  }