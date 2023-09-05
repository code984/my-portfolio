import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBmiqBLfuKGkDXxjMphZblQcznHFBFq350",
    authDomain: "portfolio-d0157.firebaseapp.com",
    databaseURL: "https://portfolio-d0157-default-rtdb.firebaseio.com",
    projectId: "portfolio-d0157",
    storageBucket: "portfolio-d0157.appspot.com",
    messagingSenderId: "427323648686",
    appId: "1:427323648686:web:193462177f78856e911b3f"
  };

  firebase.initializeApp(firebaseConfig)
  const database=firebase.database();
  export default database;