import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  
    apiKey: "AIzaSyCuY7RmElEXTJJ0SmwlfrQ79CUCm0V6EFU",
    authDomain: "coder-ecommercer.firebaseapp.com",
    projectId: "coder-ecommercer",
    storageBucket: "coder-ecommercer.appspot.com",
    messagingSenderId: "560228566012",
    appId: "1:560228566012:web:abb56bddb80cf01e5da879"
  });

export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}



