import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLx5o-PODvss7JAoInBzs2RUKQAD36wQo",
  authDomain: "my-app-12-2447c.firebaseapp.com",
  projectId: "my-app-12-2447c",
  storageBucket: "my-app-12-2447c.appspot.com",
  messagingSenderId: "1005645553332",
  appId: "1:1005645553332:web:474a8b74c19dbe7e0bc1e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)