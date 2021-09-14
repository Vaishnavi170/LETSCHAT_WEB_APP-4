
const firebaseConfig = {
      apiKey: "AIzaSyAVmXPecwO2g8l2Vy-9drkSE6VSarOpEYs",
      authDomain: "kwitter-part-2-abfbb.firebaseapp.com",
      databaseURL: "https://kwitter-part-2-abfbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-part-2-abfbb",
      storageBucket: "kwitter-part-2-abfbb.appspot.com",
      messagingSenderId: "462431007934",
      appId: "1:462431007934:web:1e30450b29afb78d4bdaef"
    };
    user_name = localStorage.getItem("user_name");
    document.getElementById("username").innerHTML = "Welcome " + user_name;
    function addRoom(){
          room_name = document.getElementById("room_name").value;
 
             firebase.database().ref("/").child(room_name).update({
                   purpose:"adding room name"
             });
             localStorage.setItem("room_name", room_name);
             window.location = "kwitter_page.html";
    }
    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class = 'room_name' id = "+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row
    });});}
    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    }
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }
