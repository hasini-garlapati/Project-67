import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMTWAUjTab-ZHhPOxNZZh0nrzvE6BRzWA",
  authDomain: "pro58-cef37.firebaseapp.com",
  databaseURL: "https://pro58-cef37-default-rtdb.firebaseio.com",
  projectId: "pro58-cef37",
  storageBucket: "pro58-cef37.appspot.com",
  messagingSenderId: "188098166516",
  appId: "1:188098166516:web:189b0605ca0bb7280d28a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  
  export default firebase.database();