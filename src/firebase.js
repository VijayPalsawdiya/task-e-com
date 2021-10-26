// import { initializeApp } from 'firebase/app';
// 
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCsqAjc0j_CG9mw-2_qUKWWf0wjjauKyyQ",
  authDomain: "user-data-874da.firebaseapp.com",
  databaseURL: "https://user-data-874da-default-rtdb.firebaseio.com",
  projectId: "user-data-874da",
  storageBucket: "user-data-874da.appspot.com",
  messagingSenderId: "320159756865",
  appId: "1:320159756865:web:8ed94ce8a65ccc4f030cc0",
};

// export const app = initializeApp(firebaseConfig);
// const db = getDatabase(app)
// export const dbRef = ref(db, `users`)

// export const setToDB = (ref,data) => {
//   return push(ref,data)
// }

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();