import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyARW2BdCtMxzR6RDUqaTFj6Qi70idau6GQ",
  authDomain: "pualani-92473.firebaseapp.com",
  projectId: "pualani-92473",
  storageBucket: "pualani-92473.appspot.com",
  messagingSenderId: "930936023215",
  appId: "1:930936023215:web:041494dba6c7196cd08c5a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
