import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyB8mPtAJu8dFswi8awh2vUQFYK37ltFUEc",
  authDomain: "project-management-app-72690.firebaseapp.com",
  projectId: "project-management-app-72690",
  storageBucket: "project-management-app-72690.appspot.com",
  messagingSenderId: "113772094076",
  appId: "1:113772094076:web:b29d5775dd80e8f7c49ff9"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 