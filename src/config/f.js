import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyClWxpO6HSbHwab73k6Bub3j4-SBCG7sb4",
    authDomain: "megabig-30e81.firebaseapp.com",
    projectId: "megabig-30e81",
    storageBucket: "megabig-30e81.appspot.com",
    messagingSenderId: "376485408107",
    appId: "1:376485408107:web:e8585de87d21e70b00b02e",
    measurementId: "G-EEMH30KB7Q"
  };
  
  const f=firebase.initializeApp(firebaseConfig);
  export default f;