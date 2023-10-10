import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import  'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHv6p6il2S36H17rV_KyydmEZYFsO3gds",
    authDomain: "chatapp-307bc.firebaseapp.com",
    projectId: "chatapp-307bc",
    storageBucket: "chatapp-307bc.appspot.com",
    messagingSenderId: "527063433347",
    appId: "1:527063433347:web:41b3490c7837aa02e01bb6"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };