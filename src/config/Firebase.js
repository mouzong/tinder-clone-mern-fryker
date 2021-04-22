import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwK3qfq4tTDObGu7e4Sjk8kJIjqzAwvSI",
  authDomain: "tinder-clone-fryker-4d8be.firebaseapp.com",
  projectId: "tinder-clone-fryker-4d8be",
  storageBucket: "tinder-clone-fryker-4d8be.appspot.com",
  messagingSenderId: "630961726748",
  appId: "1:630961726748:web:520e128b7fc4d7bfe5c6d9",
  measurementId: "G-VZ0013JKML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();
{
  /**use a config file from your personal firebase repo */
}

export default database;
