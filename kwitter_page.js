const firebaseConfig = {
    apiKey: "AIzaSyD8Ssste3koHGxmtba5Y4-_D7NOXwwdmyE",
    authDomain: "project-kwitter-ed1f4.firebaseapp.com",
    databaseURL: "https://project-kwitter-ed1f4-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-ed1f4",
    storageBucket: "project-kwitter-ed1f4.appspot.com",
    messagingSenderId: "1082295115159",
    appId: "1:1082295115159:web:915e8688f4506b0bfc38d2"
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
