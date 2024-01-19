import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0EBQ-QZJCyM-SGB5F4ODMVQYuL38rS_I',
  authDomain: 'clone-5a840.firebaseapp.com',
  projectId: 'clone-5a840',
  storageBucket: 'clone-5a840.appspot.com',
  messagingSenderId: '156517356579',
  appId: '1:156517356579:web:89ed07d82e112783760d96',
  measurementId: 'G-GE6HE2XQ9V',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
