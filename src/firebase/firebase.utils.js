import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB1J-jfPJORVyS6jDbJ9H0fGqANusUR748",
    authDomain: "crwn-db-c44d3.firebaseapp.com",
    databaseURL: "https://crwn-db-c44d3.firebaseio.com",
    projectId: "crwn-db-c44d3",
    storageBucket: "crwn-db-c44d3.appspot.com",
    messagingSenderId: "9278846184",
    appId: "1:9278846184:web:6f80a8ae5b6277a975855d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;