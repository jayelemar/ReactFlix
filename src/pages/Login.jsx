import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7qRo1Inm1FaS91HnYS-aklDchVcx50LI",
    authDomain: "reactflix-7b904.firebaseapp.com",
    projectId: "reactflix-7b904",
    storageBucket: "reactflix-7b904.appspot.com",
    messagingSenderId: "940904018012",
    appId: "1:940904018012:web:ffad65387579314f3db699",
    measurementId: "G-30S6WVDNGG"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication
const auth = getAuth(app);

// Function to handle login
const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      console.log('Logged in as:', user.email);
    })
    .catch((error) => {
      // Handle login error
      console.error('Login error:', error);
    });
};
