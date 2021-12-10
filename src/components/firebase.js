import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-DBlycaQj7oeWrA2lk4vbW_J0JBR2oq4",
    authDomain: "mary-juane.firebaseapp.com",
    projectId: "mary-juane",
    storageBucket: "mary-juane.appspot.com",
    messagingSenderId: "676261786392",
    appId: "1:676261786392:web:076ec65ff049e1c41ea46d"
  }
  const app = firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore(app);

