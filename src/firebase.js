import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6EVbwJNzN-duQ2oCEBwmnvjpXB9DOx6I",
    authDomain: "smilebusters.firebaseapp.com",
    databaseURL: "https://smilebusters.firebaseio.com",
    projectId: "smilebusters",
    storageBucket: "smilebusters.appspot.com",
    messagingSenderId: "947331267018",
    appId: "1:947331267018:web:e1679a871da73b4f757733",
});

let db = firebaseApp.firestore();
export const auth = firebase.auth();
export {db};