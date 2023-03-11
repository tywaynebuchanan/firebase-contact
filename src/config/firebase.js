import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAUZ5AVd_s5iu9kcYHo5mlh_mRHdWot4Ig",
    authDomain: "react-contact-463e7.firebaseapp.com",
    projectId: "react-contact-463e7",
    storageBucket: "react-contact-463e7.appspot.com",
    messagingSenderId: "512554736715",
    appId: "1:512554736715:web:0623d8ba4451c41c68c1ce"
  };

const app = initializeApp(firebaseConfig)
export const firebasedb = getFirestore(app)
export const storage = getStorage(app)
