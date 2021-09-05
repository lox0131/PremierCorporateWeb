import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

const clientCredentials = {
  apiKey: "AIzaSyCt7iavImz1GrUrQytMfJ6DkGqxfSEuY0s",
  authDomain: "premier-corp.firebaseapp.com",
  projectId: "premier-corp",
  storageBucket: "premier-corp.appspot.com",
  messagingSenderId: "53009472653",
  appId: "1:53009472653:web:98547b568614505bad16c4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
