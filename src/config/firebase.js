import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfmtxkRHdo8WGb7I8rU9UOFGmuqjcNjP4",
  authDomain: "school-project-fca40.firebaseapp.com",
  projectId: "school-project-fca40",
  storageBucket: "school-project-fca40.appspot.com",
  messagingSenderId: "732112487469",
  appId: "1:732112487469:web:9265f2c3297d6a9dc324a4",
  measurementId: "G-PWZRQ8MD6K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
