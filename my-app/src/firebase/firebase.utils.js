import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAsGRx2MDmjzBNJTvLSArUmz9mJ1JtFTXE",
  authDomain: "store-db-3455d.firebaseapp.com",
  databaseURL: "https://store-db-3455d.firebaseio.com",
  projectId: "store-db-3455d",
  storageBucket: "store-db-3455d.appspot.com",
  messagingSenderId: "190997663986",
  appId: "1:190997663986:web:cbdf3e2b1f5b8f850e006b"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
