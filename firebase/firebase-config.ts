import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsZ90wRrwBeYen7WiVtWtgZ6jhHI49OTY",
  authDomain: "storefront-accessibility-data.firebaseapp.com",
  projectId: "storefront-accessibility-data",
  storageBucket: "storefront-accessibility-data.appspot.com",
  messagingSenderId: "867505456710",
  appId: "1:867505456710:web:8327c7c893389b8db5ec47",
  measurementId: "G-TWDLBR5P2T"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);