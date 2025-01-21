import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAMaYg7iWuIybwJscb1Y7Nb-mD_h2lyzxA",
  authDomain: "test5-e85a1.firebaseapp.com",
  databaseURL: "https://test5-e85a1-default-rtdb.firebaseio.com",
  projectId: "test5-e85a1",
  storageBucket: "test5-e85a1.firebasestorage.app",
  messagingSenderId: "812596616673",
  appId: "1:812596616673:web:b306b1cf2670fc3d9f06a0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
