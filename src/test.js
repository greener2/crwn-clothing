import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


firestore.collection("users").doc("YVdkojHfxSCMNzEblBUt").collection("cartItems").doc("2o7WbZ8uF5D5PflxYArS");
firestore.doc("/users/YVdkojHfxSCMNzEblBUt/cartItems/2o7WbZ8uF5D5PflxYArS");
firestore.collection("/users/YVdkojHfxSCMNzEblBUt/cartItems");