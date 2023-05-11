const firebaseConfig = {
  apiKey: "AIzaSyDM0rW9kzS-RyTSimfSUkB_65Tryb6PwR4",
  authDomain: "break-out-web.firebaseapp.com",
  projectId: "break-out-web",
  storageBucket: "break-out-web.appspot.com",
  messagingSenderId: "258505534376",
  appId: "1:258505534376:web:a7afb4f9ed674aa4c44b9d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
const db = firebase.firestore();
