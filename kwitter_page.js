const firebaseConfig = {
    apiKey: "AIzaSyD5YoUEw9hth0Utl83elMpygNtfT_p6Y84",
    authDomain: "kwitter-part-3.firebaseapp.com",
    databaseURL: "https://kwitter-part-3-default-rtdb.firebaseio.com",
    projectId: "kwitter-part-3",
    storageBucket: "kwitter-part-3.appspot.com",
    messagingSenderId: "635305759805",
    appId: "1:635305759805:web:62e4da037e24cf02f6c654"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
