import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDS6PArBwYkR1jOh8OdwDitbySdzEj3trg",
    authDomain: "todo-app-9a339.firebaseapp.com",
    projectId: "todo-app-9a339",
    storageBucket: "todo-app-9a339.appspot.com",
    messagingSenderId: "173644616400",
    appId: "1:173644616400:web:93fc21b98788ffe0da84d5",
    measurementId: "G-1VY9K3T4JZ"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export { db };