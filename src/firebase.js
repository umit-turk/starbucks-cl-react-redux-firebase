import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCSjQBFECMPRmfUFgWV0BYOtW64puWLSZ4",
    authDomain: "starbuck-clon.firebaseapp.com",
    projectId: "starbuck-clon",
    storageBucket: "starbuck-clon.appspot.com",
    messagingSenderId: "688300867208",
    appId: "1:688300867208:web:db159cfda61e8c3f61293d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebaseApp.auth()

  export {auth};