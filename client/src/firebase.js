// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "website-builder-df1e6.firebaseapp.com",
  projectId: "website-builder-df1e6",
  storageBucket: "website-builder-df1e6.firebasestorage.app",
  messagingSenderId: "808842527151",
  appId: "1:808842527151:web:3ab8e79e1c517240752f5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
