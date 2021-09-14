const firebaseConfig = {
    apiKey: "AIzaSyDEHU--TxJVg_fRocwWlpdbvGjy9tl03lU",
    authDomain: "kwittr-210b1.firebaseapp.com",
    projectId: "kwittr-210b1",
    storageBucket: "kwittr-210b1.appspot.com",
    messagingSenderId: "778347538437",
    appId: "1:778347538437:web:5d15e591bfee7cda43146c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  function addUser(){
      user_name = document.getElementById("user_name").value;
      localStorage.setItem("user_name",user_name);
      window.location = "kwitter_room.html";
  }