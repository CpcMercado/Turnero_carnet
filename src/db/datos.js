import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDFJmuU5bBQzpNqBFWmtOegTWMM99enV4A",
    authDomain: "cpcmercado-21580.firebaseapp.com",
    projectId: "cpcmercado-21580",
    storageBucket: "cpcmercado-21580.appspot.com",
    messagingSenderId: "717110775909",
    appId: "1:717110775909:web:3761e1c96c19a95238f68c"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

