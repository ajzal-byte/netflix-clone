import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6T_6bw2ugWUoK-Q3oPuh1cettdq1hVlY",
  authDomain: "netflix-clone-dd2df.firebaseapp.com",
  projectId: "netflix-clone-dd2df",
  storageBucket: "netflix-clone-dd2df.appspot.com",
  messagingSenderId: "330452078524",
  appId: "1:330452078524:web:812b1f986fefba60e425b9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;