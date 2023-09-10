//firebase config key setup
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCsOiCoi1TplRDMM23ixjnvYrcFvl0B1xg",
  authDomain: "mobilenumberverification-b526d.firebaseapp.com",
  projectId: "mobilenumberverification-b526d",
  storageBucket: "mobilenumberverification-b526d.appspot.com",
  messagingSenderId: "789408372940",
  appId: "1:789408372940:web:9d9843801221d934544a69",
  measurementId: "G-39LEMFNHTR"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export {firebaseConfig}