import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCcZGX9snWcB8_HlCecNahLZYFsCJ54hxE",
  authDomain: "g-drive-23d87.firebaseapp.com",
  projectId: "g-drive-23d87",
  storageBucket: "g-drive-23d87.appspot.com",
  messagingSenderId: "337631942672",
  appId: "1:337631942672:web:a66739a943e016af3fd295",
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = app.storage();
export const auth = app.auth();
export default app;
