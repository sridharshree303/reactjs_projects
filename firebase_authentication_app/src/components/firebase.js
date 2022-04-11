import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiGYW8ejaTxW_b6hQbWy9olZVRHcpRTI0",
    authDomain: "authenticate-49f52.firebaseapp.com",
    projectId: "authenticate-49f52",
    storageBucket: "authenticate-49f52.appspot.com",
    messagingSenderId: "21935841826",
    appId: "1:21935841826:web:c98d8b896917f042c7e07b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth}
export default db;