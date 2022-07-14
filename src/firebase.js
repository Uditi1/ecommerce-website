// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAq-P3CEK8OLRiRgbr8jugm1S12FwNwjcg",
    authDomain: "ecommerce-website-2f168.firebaseapp.com",
    projectId: "ecommerce-website-2f168",
    storageBucket: "ecommerce-website-2f168.appspot.com",
    messagingSenderId: "901883944600",
    appId: "1:901883944600:web:bc84c09c90e6bcef37faed",
    measurementId: "G-YVSQBFZRPT"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };