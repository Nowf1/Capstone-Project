import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANyG8KIn2DRmJXaxWXo4aMvoZdQ4Ed_LY",
  authDomain: "nowf-clothing-db.firebaseapp.com",
  projectId: "nowf-clothing-db",
  storageBucket: "nowf-clothing-db.appspot.com",
  messagingSenderId: "219144407595",
  appId: "1:219144407595:web:64f5890bf279695d23386e",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePop = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
