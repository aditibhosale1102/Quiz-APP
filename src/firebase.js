import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBTAgSEXvdcfdYCBGOUStcRJmV9_1PktM",
  authDomain: "quiz-app-31c55.firebaseapp.com",
  projectId: "quiz-app-31c55",
  storageBucket: "quiz-app-31c55.firebasestorage.app",
  messagingSenderId: "958293655071",
    appId: "1:958293655071:web:987d9d28f3762f89a19f2a",
    easurementId: "G-J38S75376P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);