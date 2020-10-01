import firebase from 'firebase';
//import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAEdHaBqJd8LrN1yv9oIfHXO2fyouKpTU",
    authDomain: "peoplefinder-e1566.firebaseapp.com",
    databaseURL: "https://peoplefinder-e1566.firebaseio.com",
    projectId: "peoplefinder-e1566",
    storageBucket: "peoplefinder-e1566.appspot.com",
    messagingSenderId: "65084004587",
    appId: "1:65084004587:web:b93f05b996ca3520b046ae",
    measurementId: "G-JM1B8D9JER"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;