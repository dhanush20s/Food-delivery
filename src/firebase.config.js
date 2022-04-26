import {getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCF--HHtzmX-tNo3FjZaVJfLGBA2gaju5Y",
    authDomain: "restaurantapp-d3a85.firebaseapp.com",
    databaseURL: "https://restaurantapp-d3a85-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d3a85",
    storageBucket: "restaurantapp-d3a85.appspot.com",
    messagingSenderId: "999642609529",
    appId: "1:999642609529:web:58f644d3dbda34120fa1a8"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };