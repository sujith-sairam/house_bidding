import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import { serverTimestamp } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithPopup,
        GoogleAuthProvider,
        signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD3lfnYrWRhI8EnhUsONvL2pXJ-o3W5MKg",
  authDomain: "house-bidding-ed8ed.firebaseapp.com",
  projectId: "house-bidding-ed8ed",
  storageBucket: "house-bidding-ed8ed.appspot.com",
  messagingSenderId: "227285375621",
  appId: "1:227285375621:web:9b0b5e274db670815d67ec",
  measurementId: "G-7MTT7C7YT1"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const provider = new GoogleAuthProvider();

export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return

    await createUserWithEmailAndPassword(auth,email,password).then(() => { 
        alert("account has been created successfully")});
}

export const signInWithGooglePopup = async() => {
   await signInWithPopup(auth,provider);
}

export const signInUserWithEmailAndPassword = async(email,password) =>{
    if(!email || !password) return

    await signInWithEmailAndPassword(auth,email,password).then((UserCredential) => {
        const h = UserCredential.user;
        console.log(h);
        alert("User signed In");
    })
}

export const signOutUser = async() => { signOut(auth).then(() => console.log("signed out") ) }

let db = firebase.firestore();
 
export default db;
export const timestamp = serverTimestamp();
export const firestoreApp = firebaseapp.firestore();
export const storageApp = firebaseapp.storage();
export const authApp = firebaseapp.auth();

