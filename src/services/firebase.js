import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdEUsSi89hZSOCF1VXRnd_mTTJ85EigwU",
    authDomain: "instagram-5d629.firebaseapp.com",
    databaseURL: "https://instagram-5d629.firebaseio.com",
    projectId: "instagram-5d629",
    storageBucket: "instagram-5d629.appspot.com",
    messagingSenderId: "431112696487",
    appId: "1:431112696487:web:cf4c66844f29d79ed02182"
  });

const firebaseFirestore = firebase.firestore();
const firebaseAuth = firebase.auth();
const firebaseStorage = firebase.storage();
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export {
    firebaseFirestore,
    firebaseAuth,
    firebaseStorage,
    firebaseApp,
    firebase,
    facebookProvider
};