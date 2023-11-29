import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJC9E5m8h9ze_fr3UZCx-X8jeS5xze4-A",
  authDomain: "dolist-31afa.firebaseapp.com",
  projectId: "dolist-31afa",
  storageBucket: "dolist-31afa.appspot.com",
  messagingSenderId: "826707586792",
  appId: "1:826707586792:web:0a61c4c10918ac3023235d",
  measurementId: "G-YXZZV76GBM"
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);