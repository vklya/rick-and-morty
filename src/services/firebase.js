import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,  } from "firebase/auth";

const firebaseConfig = {
    apiKey: 'AIzaSyBl-6N9uCnkudXtBd55Qv04yAt7yA5Aky8',
    authDomain: "rick-and-morty-2c323.firebaseapp.com",
    projectId: "rick-and-morty-2c323",
    storageBucket: "rick-and-morty-2c323.appspot.com",
    messagingSenderId: "755340305126",
    appId: "1:755340305126:web:74751fa4e75d1ff3a7d127",
    measurementId: "G-C1CXVE7D1P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
