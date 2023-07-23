import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAsvXLHIdGN-yojGoQbCqQwmMGjImMCO-A",
  authDomain: "rlbddotcom-17cf7.firebaseapp.com",
  projectId: "rlbddotcom-17cf7",
  storageBucket: "rlbddotcom-17cf7.appspot.com",
  messagingSenderId: "642585134212",
  appId: "1:642585134212:web:24e4ed094a0a9db79aeed1",
  measurementId: "G-2Y3XJ38BLW"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {db, auth, storage};