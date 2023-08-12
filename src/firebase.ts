// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0PAo6ZEL_EW6o1TrcCSKOccWWxUHiw9M',
  authDomain: 'automatic-honor-391619.firebaseapp.com',
  projectId: 'automatic-honor-391619',
  storageBucket: 'automatic-honor-391619.appspot.com',
  messagingSenderId: '16189226038',
  appId: '1:16189226038:web:c90821bd0e9ef38ece2c97',
  measurementId: 'G-N07GPXE8KR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
