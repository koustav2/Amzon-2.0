// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getApps } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAg-_E5iO_GsgeddAvU_JN_LXIJeqOw_28",
  authDomain: "clone-17e2d.firebaseapp.com",
  projectId: "clone-17e2d",
  storageBucket: "clone-17e2d.appspot.com",
  messagingSenderId: "1000533140922",
  appId: "1:1000533140922:web:ac29b1cc94e8fa4e7fa983",
  measurementId: "G-W5G51Q7YVS"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

  // const storage = firebase.storage()

  // Create a function to fetch all data from a collection

