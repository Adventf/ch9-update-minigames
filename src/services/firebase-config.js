import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhx8Y9RDLgK63fXQ9rkHQZv4yfTjxks50",
  authDomain: "fb-crud-a4c68.firebaseapp.com",
  projectId: "fb-crud-a4c68",
  storageBucket: "fb-crud-a4c68.appspot.com",
  messagingSenderId: "204788510850",
  appId: "1:204788510850:web:3e732be489d6ea0fdac49b",
  measurementId: "G-Z46KL0XKXQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
